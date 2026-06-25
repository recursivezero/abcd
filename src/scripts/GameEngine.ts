import type {
  Achievement,
  ActivePowerUps,
  FallingItemData,
  GameStatus,
  GameStats,
  LeaderboardEntry,
  PowerUpType
} from "../types/keyboard-ninja";
import { getLevelById } from "../utils/keyboard-ninja/levels";
import { CORRECT_KEY_POINTS, CORRECT_WORD_POINTS, getComboBonus } from "../utils/keyboard-ninja/scoring";
import {
  DOUBLE_SCORE_DURATION_MS,
  MAX_LIVES,
  POWER_UP_DISPLAY,
  POWER_UP_SPAWN_CHANCE,
  SLOW_MOTION_DURATION_MS,
  SLOW_MOTION_FALL_MULTIPLIER,
  POWER_UP_TYPES
} from "../utils/keyboard-ninja/powerUps";
import { ACHIEVEMENTS } from "../utils/keyboard-ninja/achievements";
import {
  addLeaderboardEntry,
  getLeaderboard,
  getUnlockedAchievementIds,
  saveUnlockedAchievementIds
} from "../utils/keyboard-ninja/storage";

const STARTING_LIVES = 3;
const NUM_LANES = 6;
const SLICE_REMOVE_DELAY_MS = 220;
const COUNTDOWN_START = 3;
const COUNTDOWN_STEP_MS = 700;
const ACHIEVEMENT_TOAST_MS = 3200;

// ── Game Config Types ──────────────────────────────────────────
export type ItemShape = "square" | "rounded" | "pill";
export type ItemSpeed = "slow" | "normal" | "fast";

export interface GameConfig {
  itemColor: string; // hex color for falling items
  itemShape: ItemShape; // border-radius style
  itemSpeed: ItemSpeed; // duration multiplier
}

const SPEED_MULTIPLIER: Record<ItemSpeed, number> = {
  slow: 1.7,
  normal: 1.0,
  fast: 0.55
};

const SHAPE_RADIUS: Record<ItemShape, string> = {
  square: "0px",
  rounded: "8px",
  pill: "999px"
};

const DEFAULT_CONFIG: GameConfig = {
  itemColor: "#4d96ff",
  itemShape: "square",
  itemSpeed: "normal"
};

// ──────────────────────────────────────────────────────────────

function createId(): string {
  return `item-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function randomInt(min: number, max: number): number {
  return Math.floor(min + Math.random() * (max - min));
}

function playTone(ctx: AudioContext, frequency: number, durationMs: number, type: OscillatorType) {
  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();
  oscillator.type = type;
  oscillator.frequency.value = frequency;
  oscillator.connect(gain);
  gain.connect(ctx.destination);
  const now = ctx.currentTime;
  gain.gain.setValueAtTime(0.08, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + durationMs / 1000);
  oscillator.start(now);
  oscillator.stop(now + durationMs / 1000);
}

interface TrackedItem extends FallingItemData {
  el: HTMLDivElement;
  lane: number;
  spawnedAt: number;
}

interface KeyboardNinjaElements {
  wrapper: HTMLElement;
  scoreboardWrap: HTMLElement;
  arena: HTMLElement;
  startCard: HTMLElement;
  startBtn: HTMLButtonElement;
  changeLevelCard: HTMLElement;
  playBtn: HTMLButtonElement;
  countdown: HTMLElement;
  gameoverCard: HTMLElement;
  restartBtn: HTMLButtonElement;
  backBtn: HTMLButtonElement;
  score: HTMLElement;
  lives: HTMLElement;
  combo: HTMLElement;
  misses: HTMLElement;
  levelName: HTMLElement;
  badgeSlow: HTMLElement;
  badgeDouble: HTMLElement;
  finalScore: HTMLElement;
  finalCorrect: HTMLElement;
  finalCombo: HTMLElement;
  finalMisses: HTMLElement;
  highScoreBadge: HTMLElement;
  leaderboardSidebar: HTMLElement;
  achievementsIdle: HTMLElement;
  toast: HTMLElement;
  toastTitle: HTMLElement;
}

export class KeyboardNinjaGame {
  private status: GameStatus = "idle";
  private levelId = 1;
  private items = new Map<string, TrackedItem>();
  private stats: GameStats = { score: 0, lives: STARTING_LIVES, misses: 0, combo: 0, bestCombo: 0, correctCount: 0 };
  private targetId: string | null = null;
  private typedBuffer = "";
  private activePowerUps: ActivePowerUps = { slowMotion: false, doubleScore: false };
  private leaderboard: LeaderboardEntry[] = [];
  private unlockedAchievementIds: string[] = [];
  private isNewHighScore = false;
  private hasPlayedOnce = false;

  // ── Config ──
  private config: GameConfig = { ...DEFAULT_CONFIG };

  private laneCounter = 0;
  private spawnTimer: number | null = null;
  private countdownTimer: number | null = null;
  private countdownValue = COUNTDOWN_START;
  private audioCtx: AudioContext | null = null;
  private doubleScoreUntil = 0;
  private slowMotionUntil = 0;
  private leaderboardSaved = false;
  private toastTimer: number | null = null;
  private toastQueue: Achievement[] = [];
  private isToastShowing = false;

  private el!: KeyboardNinjaElements;
  private boundKeydown = (event: KeyboardEvent) => this.handleKeydown(event);

  init(root: ParentNode = document): void {
    const q = <T extends HTMLElement>(selector: string): T => {
      const found = root.querySelector<T>(selector);
      if (!found) throw new Error(`Keyboard Ninja: missing element ${selector}`);
      return found;
    };

    this.el = {
      wrapper: q("#kn-wrapper"),
      scoreboardWrap: q("#kn-scoreboard-wrap"),
      arena: q("#kn-arena"),
      startCard: q("#kn-start-card"),
      startBtn: q<HTMLButtonElement>("#kn-start-btn"),
      changeLevelCard: q("#kn-changelevel-card"),
      playBtn: q<HTMLButtonElement>("#kn-play-btn"),
      countdown: q("#kn-countdown"),
      gameoverCard: q("#kn-gameover-card"),
      restartBtn: q<HTMLButtonElement>("#kn-restart-btn"),
      backBtn: q<HTMLButtonElement>("#kn-back-btn"),
      score: q("#kn-score"),
      lives: q("#kn-lives"),
      combo: q("#kn-combo"),
      misses: q("#kn-misses"),
      levelName: q("#kn-level-name"),
      badgeSlow: q("#kn-badge-slow"),
      badgeDouble: q("#kn-badge-double"),
      finalScore: q("#kn-final-score"),
      finalCorrect: q("#kn-final-correct"),
      finalCombo: q("#kn-final-combo"),
      finalMisses: q("#kn-final-misses"),
      highScoreBadge: q("#kn-high-score-badge"),
      leaderboardSidebar: q("#kn-leaderboard-sidebar"),
      achievementsIdle: q("#kn-achievements-idle"),
      toast: q("#kn-achievement-toast"),
      toastTitle: q("#kn-achievement-toast-title")
    };

    this.leaderboard = getLeaderboard();
    this.unlockedAchievementIds = getUnlockedAchievementIds();

    root.querySelectorAll<HTMLButtonElement>(".kn-level-btn").forEach((btn) => {
      btn.addEventListener("click", () => this.selectLevel(Number(btn.dataset.levelId)));
    });

    this.el.startBtn.addEventListener("click", () => this.startGame());
    this.el.playBtn.addEventListener("click", () => this.startGame());
    this.el.restartBtn.addEventListener("click", () => this.startGame());
    this.el.backBtn.addEventListener("click", () => this.showLevelSelect());

    // ── Config controls wire-up ──
    this.wireConfigControls(root);

    window.addEventListener("keydown", this.boundKeydown);

    this.renderLevelPicker();
    this.renderLeaderboards();
    this.renderAchievements();
    this.setStatus("idle");
  }

  // ── Wire config panel controls ─────────────────────────────
  private wireConfigControls(root: ParentNode): void {
    const toggleBtn = root.querySelector<HTMLButtonElement>("#kn-settings-toggle");
    const panel = root.querySelector<HTMLElement>("#kn-settings-panel");
    toggleBtn?.addEventListener("click", () => {
      const open = panel?.classList.toggle("kn-settings-open");
      toggleBtn.setAttribute("aria-expanded", String(!!open));
    });

    // Color — DONO cards ke color inputs sync karo
    const colorInputs = root.querySelectorAll<HTMLInputElement>(".kn-cfg-color");
    colorInputs.forEach((input) => {
      input.addEventListener("input", () => {
        this.config.itemColor = input.value;
        // Dono inputs same value pe rakho
        colorInputs.forEach((i) => {
          i.value = input.value;
        });
      });
    });

    // Shape — querySelectorAll se dono cards ke buttons
    root.querySelectorAll<HTMLButtonElement>("[data-shape]").forEach((btn) => {
      btn.addEventListener("click", () => {
        this.config.itemShape = btn.dataset.shape as ItemShape;
        root
          .querySelectorAll<HTMLButtonElement>("[data-shape]")
          .forEach((b) => b.classList.toggle("kn-cfg-btn-active", b.dataset.shape === btn.dataset.shape));
      });
    });

    // Speed
    root.querySelectorAll<HTMLButtonElement>("[data-speed]").forEach((btn) => {
      btn.addEventListener("click", () => {
        this.config.itemSpeed = btn.dataset.speed as ItemSpeed;
        root
          .querySelectorAll<HTMLButtonElement>("[data-speed]")
          .forEach((b) => b.classList.toggle("kn-cfg-btn-active", b.dataset.speed === btn.dataset.speed));
      });
    });
  }

  destroy(): void {
    window.removeEventListener("keydown", this.boundKeydown);
    this.clearSpawnTimer();
    if (this.countdownTimer) window.clearTimeout(this.countdownTimer);
    if (this.toastTimer) window.clearTimeout(this.toastTimer);
    this.el.toast.hidden = true;
    this.isToastShowing = false;
    this.toastQueue = [];
    this.items.forEach((item) => item.el.remove());
    this.items.clear();
  }

  // ---------- audio ----------

  private ensureAudio(): AudioContext | null {
    if (!this.audioCtx) {
      const AudioCtxClass: typeof AudioContext | undefined =
        window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (AudioCtxClass) this.audioCtx = new AudioCtxClass();
    }
    return this.audioCtx;
  }

  private playHitSound(isWord: boolean): void {
    const ctx = this.ensureAudio();
    if (!ctx) return;
    playTone(ctx, isWord ? 720 : 540, isWord ? 160 : 90, "triangle");
  }

  private playMissSound(): void {
    const ctx = this.ensureAudio();
    if (!ctx) return;
    playTone(ctx, 180, 140, "sawtooth");
  }

  private playPowerUpSound(): void {
    const ctx = this.ensureAudio();
    if (!ctx) return;
    playTone(ctx, 920, 200, "sine");
  }

  // ---------- screens ----------

  private setStatus(status: GameStatus): void {
    this.status = status;
    const isIdle = status === "idle";
    this.el.startCard.hidden = !(isIdle && !this.hasPlayedOnce);
    this.el.changeLevelCard.hidden = !(isIdle && this.hasPlayedOnce);
    this.el.countdown.hidden = status !== "countdown";
    this.el.gameoverCard.hidden = status !== "gameover";
    this.el.scoreboardWrap.hidden = status !== "playing" && status !== "countdown";

    const quitBtn = document.getElementById("kn-quit-btn") as HTMLElement | null;
    if (quitBtn) {
      quitBtn.hidden = status === "idle" && !this.hasPlayedOnce;
    }
  }

  private selectLevel(id: number): void {
    if (this.status !== "idle" && this.status !== "gameover") return;
    this.levelId = id;
    this.renderLevelPicker();
  }

  private renderLevelPicker(): void {
    document.querySelectorAll<HTMLButtonElement>(".kn-level-btn").forEach((btn) => {
      btn.classList.toggle("kn-level-btn-active", Number(btn.dataset.levelId) === this.levelId);
    });
  }

  // ---------- scoreboard ----------

  private renderScoreboard(): void {
    this.el.score.textContent = String(this.stats.score);
    this.el.lives.textContent = "❤️".repeat(Math.max(this.stats.lives, 0)) || "💔";
    this.el.combo.textContent = `x${this.stats.combo}`;
    this.el.misses.textContent = String(this.stats.misses);
    this.el.levelName.textContent = getLevelById(this.levelId).name;
    this.el.badgeSlow.hidden = !this.activePowerUps.slowMotion;
    this.el.badgeDouble.hidden = !this.activePowerUps.doubleScore;
  }

  // ---------- leaderboard / achievements ----------

  private buildLeaderboardMarkup(): HTMLElement {
    if (this.leaderboard.length === 0) {
      const empty = document.createElement("p");
      empty.className = "kn-leaderboard-empty";
      empty.textContent = "No scores yet — be the first!";
      return empty;
    }

    const list = document.createElement("ol");
    list.className = "kn-leaderboard";
    this.leaderboard.slice(0, 5).forEach((entry, index) => {
      const row = document.createElement("li");
      row.className = "kn-leaderboard-row";

      const rank = document.createElement("span");
      rank.className = "kn-leaderboard-rank";
      rank.textContent = `#${index + 1}`;

      const score = document.createElement("span");
      score.className = "kn-leaderboard-score";
      score.textContent = String(entry.score);

      const level = document.createElement("span");
      level.className = "kn-leaderboard-level";
      level.textContent = entry.levelName;

      row.append(rank, score, level);
      list.appendChild(row);
    });
    return list;
  }

  private renderLeaderboards(): void {
    this.el.leaderboardSidebar.replaceChildren(this.buildLeaderboardMarkup());
  }

  private renderAchievements(): void {
    const badges = ACHIEVEMENTS.map((achievement) => {
      const unlocked = this.unlockedAchievementIds.includes(achievement.id);
      const badge = document.createElement("div");
      badge.className = `kn-achievement-badge${unlocked ? " kn-achievement-unlocked" : ""}`;
      badge.title = achievement.description;

      const icon = document.createElement("span");
      icon.className = "kn-achievement-icon";
      icon.textContent = unlocked ? "🏆" : "🔒";

      const title = document.createElement("span");
      title.className = "kn-achievement-title";
      title.textContent = achievement.title;

      const progress = document.createElement("span");
      progress.className = "kn-achievement-progress";
      progress.textContent = unlocked ? "✓ Unlocked" : "Locked";

      badge.append(icon, title, progress);
      return badge;
    });
    this.el.achievementsIdle.replaceChildren(...badges);
  }

  private checkAchievements(): void {
    const newlyUnlocked = ACHIEVEMENTS.filter(
      (a) => !this.unlockedAchievementIds.includes(a.id) && a.check(this.stats)
    );
    if (newlyUnlocked.length === 0) return;

    this.unlockedAchievementIds = [...this.unlockedAchievementIds, ...newlyUnlocked.map((a) => a.id)];
    saveUnlockedAchievementIds(this.unlockedAchievementIds);
    this.renderAchievements();

    window.setTimeout(() => {
      const badges = this.el.achievementsIdle.querySelectorAll(".kn-achievement-badge");
      newlyUnlocked.forEach((a) => {
        const idx = ACHIEVEMENTS.findIndex((ach) => ach.id === a.id);
        if (badges[idx]) {
          badges[idx].classList.add("kn-achievement-flash");
          window.setTimeout(() => badges[idx].classList.remove("kn-achievement-flash"), 1000);
        }
      });
    }, 50);

    newlyUnlocked.forEach((achievement) => this.queueToast(achievement));
  }

  private queueToast(achievement: Achievement): void {
    this.toastQueue.push(achievement);
    this.maybeShowNextToast();
  }

  private maybeShowNextToast(): void {
    if (this.isToastShowing) return;
    const next = this.toastQueue.shift();
    if (!next) return;

    this.isToastShowing = true;
    this.el.toastTitle.textContent = next.title;
    this.el.toast.hidden = false;
    this.toastTimer = window.setTimeout(() => {
      this.el.toast.hidden = true;
      this.isToastShowing = false;
      this.maybeShowNextToast();
    }, ACHIEVEMENT_TOAST_MS);
  }

  // ---------- spawning ----------

  private clearSpawnTimer(): void {
    if (this.spawnTimer) {
      window.clearInterval(this.spawnTimer);
      this.spawnTimer = null;
    }
  }

  private startSpawning(): void {
    this.clearSpawnTimer();
    const config = getLevelById(this.levelId);
    const spawn = () => this.spawnItem();
    spawn();
    this.spawnTimer = window.setInterval(spawn, config.spawnIntervalMs);
  }

  private spawnItem(): void {
    const config = getLevelById(this.levelId);

    const now = Date.now();
    const laneLastSpawnAt = new Map<number, number>();
    Array.from(this.items.values())
      .filter((item) => item.state === "falling")
      .forEach((item) => {
        const spawnedAt = item.spawnedAt ?? now;
        const existing = laneLastSpawnAt.get(item.lane);
        if (existing === undefined || spawnedAt > existing) {
          laneLastSpawnAt.set(item.lane, spawnedAt);
        }
      });

    const laneCooldownMs = config.spawnIntervalMs * (NUM_LANES / 2);

    const freeLanes: number[] = [];
    for (let i = 0; i < NUM_LANES; i += 1) {
      const lastSpawnAt = laneLastSpawnAt.get(i);
      if (lastSpawnAt === undefined || now - lastSpawnAt >= laneCooldownMs) {
        freeLanes.push(i);
      }
    }

    if (freeLanes.length === 0) return;

    const lane = freeLanes[randomInt(0, freeLanes.length)];
    const jitter = randomInt(-2, 2);
    const leftPercent = Math.min(92, Math.max(4, (lane / NUM_LANES) * 92 + 4 + jitter));

    const isPowerUp = Math.random() < POWER_UP_SPAWN_CHANCE;
    const powerUp: PowerUpType | undefined = isPowerUp
      ? POWER_UP_TYPES[randomInt(0, POWER_UP_TYPES.length)]
      : undefined;
    const value = config.pool[randomInt(0, config.pool.length)];

    // ── Apply speed config ──
    let durationMs = randomInt(config.minDurationMs, config.maxDurationMs);
    durationMs = Math.round(durationMs * SPEED_MULTIPLIER[this.config.itemSpeed]);
    if (Date.now() < this.slowMotionUntil) {
      durationMs = Math.round(durationMs * SLOW_MOTION_FALL_MULTIPLIER);
    }

    const data: FallingItemData & { lane: number; spawnedAt: number } = {
      id: createId(),
      value,
      type: powerUp ? "letter" : config.type,
      leftPercent,
      durationMs,
      state: "falling",
      powerUp,
      lane,
      spawnedAt: Date.now()
    };

    const el = this.createItemElement(data);
    this.items.set(data.id, { ...data, el });
    this.el.arena.appendChild(el);
  }

  private createItemElement(data: FallingItemData): HTMLDivElement {
    const div = document.createElement("div");
    div.className = "kn-falling-item";
    if (data.powerUp) div.classList.add("kn-item-powerup");
    div.style.left = `${data.leftPercent}%`;
    div.style.animationDuration = `${data.durationMs}ms`;
    div.dataset.id = data.id;

    // ── Apply color + shape config (only for non-powerup items) ──
    if (!data.powerUp) {
      div.style.backgroundColor = this.config.itemColor;
      div.style.borderRadius = SHAPE_RADIUS[this.config.itemShape];
    } else {
      // Powerups keep their own shape
      div.style.borderRadius = SHAPE_RADIUS[this.config.itemShape];
    }

    if (data.powerUp) {
      const info = POWER_UP_DISPLAY[data.powerUp];
      div.title = info.label;
      const icon = document.createElement("span");
      icon.className = "kn-powerup-icon";
      icon.textContent = info.icon;
      div.appendChild(icon);
    }

    data.value.split("").forEach((char) => {
      const span = document.createElement("span");
      span.className = "kn-char";
      span.textContent = char;
      div.appendChild(span);
    });

    div.addEventListener("animationend", () => this.handleItemMissed(data.id));
    return div;
  }

  private markTarget(id: string): void {
    this.items.get(id)?.el.classList.add("kn-item-target");
  }

  private updateTypedProgress(item: TrackedItem): void {
    item.el.querySelectorAll<HTMLElement>(".kn-char").forEach((span, index) => {
      span.classList.toggle("kn-char-done", index < this.typedBuffer.length);
    });
  }

  // ---------- core actions ----------

  private registerMiss(): void {
    this.stats = { ...this.stats, misses: this.stats.misses + 1, combo: 0 };
    this.renderScoreboard();
    this.playMissSound();
  }

  private sliceItem(item: TrackedItem): void {
    item.state = "sliced";
    item.el.classList.add("kn-item-sliced");
    item.el.style.animationPlayState = "paused";
    window.setTimeout(() => {
      item.el.remove();
      this.items.delete(item.id);
    }, SLICE_REMOVE_DELAY_MS);

    const isWord = item.type === "word" && !item.powerUp;
    const multiplier = Date.now() < this.doubleScoreUntil ? 2 : 1;
    const nextCombo = this.stats.combo + 1;
    const base = isWord ? CORRECT_WORD_POINTS : CORRECT_KEY_POINTS;
    const bonus = getComboBonus(nextCombo);

    this.stats = {
      ...this.stats,
      score: this.stats.score + (base + bonus) * multiplier,
      combo: nextCombo,
      bestCombo: Math.max(this.stats.bestCombo, nextCombo),
      correctCount: this.stats.correctCount + 1
    };

    this.renderScoreboard();
    this.playHitSound(isWord);
    this.checkAchievements();

    if (item.powerUp) {
      this.activatePowerUp(item.powerUp);
    }
  }

  private activatePowerUp(type: PowerUpType): void {
    this.playPowerUpSound();

    if (type === "extraLife") {
      this.stats = { ...this.stats, lives: Math.min(this.stats.lives + 1, MAX_LIVES) };
      this.renderScoreboard();
      return;
    }

    if (type === "doubleScore") {
      this.doubleScoreUntil = Date.now() + DOUBLE_SCORE_DURATION_MS;
      this.activePowerUps = { ...this.activePowerUps, doubleScore: true };
      this.renderScoreboard();
      window.setTimeout(() => {
        this.activePowerUps = { ...this.activePowerUps, doubleScore: false };
        this.renderScoreboard();
      }, DOUBLE_SCORE_DURATION_MS);
      return;
    }

    this.slowMotionUntil = Date.now() + SLOW_MOTION_DURATION_MS;
    this.activePowerUps = { ...this.activePowerUps, slowMotion: true };
    this.renderScoreboard();
    window.setTimeout(() => {
      this.activePowerUps = { ...this.activePowerUps, slowMotion: false };
      this.renderScoreboard();
    }, SLOW_MOTION_DURATION_MS);
  }

  private handleItemMissed(id: string): void {
    const item = this.items.get(id);
    if (!item || item.state !== "falling") return;

    item.el.remove();
    this.items.delete(id);

    if (this.targetId === id) {
      this.targetId = null;
      this.typedBuffer = "";
    }

    this.stats = { ...this.stats, lives: this.stats.lives - 1, combo: 0 };
    this.renderScoreboard();

    if (this.stats.lives <= 0) {
      this.endGame();
    }
  }

  // ---------- keyboard handling ----------

  private handleKeydown(event: KeyboardEvent): void {
    if (this.status !== "playing") return;
    if (event.key.length !== 1) return;
    const key = event.key.toUpperCase();
    if (!/^[A-Z0-9]$/.test(key)) return;

    const config = getLevelById(this.levelId);
    const aliveItems = Array.from(this.items.values()).filter((item) => item.state === "falling");

    if (config.type === "word") {
      if (!this.targetId) {
        const candidate = aliveItems.find((item) => item.value[0] === key);
        if (!candidate) {
          this.registerMiss();
          return;
        }
        if (candidate.value.length === 1) {
          this.sliceItem(candidate);
          return;
        }
        this.targetId = candidate.id;
        this.typedBuffer = key;
        this.markTarget(candidate.id);
        this.updateTypedProgress(candidate);
        return;
      }

      const target = this.items.get(this.targetId);
      if (!target || target.state !== "falling") {
        this.targetId = null;
        this.typedBuffer = "";
        return;
      }

      const expected = target.value[this.typedBuffer.length];
      if (key === expected) {
        this.typedBuffer += key;
        this.updateTypedProgress(target);
        if (this.typedBuffer.length === target.value.length) {
          this.sliceItem(target);
          this.targetId = null;
          this.typedBuffer = "";
        }
      } else {
        this.registerMiss();
      }
      return;
    }

    const match = aliveItems.find((item) => item.value === key);
    if (match) {
      this.sliceItem(match);
    } else {
      this.registerMiss();
    }
  }

  // ---------- countdown / lifecycle ----------

  private runCountdown(): void {
    this.countdownValue = COUNTDOWN_START;
    this.setStatus("countdown");
    this.el.countdown.textContent = String(this.countdownValue);

    const step = () => {
      this.countdownValue -= 1;
      if (this.countdownValue > 0) {
        this.el.countdown.textContent = String(this.countdownValue);
        this.countdownTimer = window.setTimeout(step, COUNTDOWN_STEP_MS);
      } else {
        this.el.countdown.textContent = "Go!";
        this.countdownTimer = window.setTimeout(() => {
          this.setStatus("playing");
          this.startSpawning();
        }, COUNTDOWN_STEP_MS);
      }
    };
    this.countdownTimer = window.setTimeout(step, COUNTDOWN_STEP_MS);
  }

  private startGame(): void {
    this.ensureAudio();
    this.clearSpawnTimer();
    if (this.countdownTimer) window.clearTimeout(this.countdownTimer);

    this.items.forEach((item) => item.el.remove());
    this.items.clear();

    this.laneCounter = 0;
    this.doubleScoreUntil = 0;
    this.slowMotionUntil = 0;
    this.targetId = null;
    this.typedBuffer = "";
    this.activePowerUps = { slowMotion: false, doubleScore: false };
    this.isNewHighScore = false;
    this.leaderboardSaved = false;
    this.stats = { score: 0, lives: STARTING_LIVES, misses: 0, combo: 0, bestCombo: 0, correctCount: 0 };

    this.el.highScoreBadge.hidden = true;
    this.renderScoreboard();
    this.runCountdown();
  }

  private showLevelSelect(): void {
    this.hasPlayedOnce = true;
    this.clearSpawnTimer();
    if (this.countdownTimer) window.clearTimeout(this.countdownTimer);

    this.items.forEach((item) => item.el.remove());
    this.items.clear();
    this.targetId = null;
    this.typedBuffer = "";

    this.el.highScoreBadge.hidden = true;
    this.setStatus("idle");
  }

  public quitGame(): void {
    this.hasPlayedOnce = false;
    this.clearSpawnTimer();

    if (this.countdownTimer) window.clearTimeout(this.countdownTimer);

    this.items.forEach((item) => item.el.remove());
    this.items.clear();

    this.targetId = null;
    this.typedBuffer = "";
    this.doubleScoreUntil = 0;
    this.slowMotionUntil = 0;
    this.activePowerUps = { slowMotion: false, doubleScore: false };
    this.isNewHighScore = false;
    this.leaderboardSaved = false;
    this.stats = { score: 0, lives: STARTING_LIVES, misses: 0, combo: 0, bestCombo: 0, correctCount: 0 };

    this.el.highScoreBadge.hidden = true;
    this.renderScoreboard();
    this.setStatus("idle");
  }

  private endGame(): void {
    this.clearSpawnTimer();

    this.items.forEach((item) => item.el.remove());
    this.items.clear();
    this.targetId = null;
    this.typedBuffer = "";

    this.setStatus("gameover");

    if (!this.leaderboardSaved) {
      this.leaderboardSaved = true;
      const previousBest = this.leaderboard[0]?.score ?? 0;
      this.isNewHighScore = this.stats.score > previousBest;

      const entry: LeaderboardEntry = {
        score: this.stats.score,
        levelName: getLevelById(this.levelId).name,
        date: new Date().toISOString()
      };
      this.leaderboard = addLeaderboardEntry(entry);
      this.renderLeaderboards();
    }

    this.el.finalScore.textContent = String(this.stats.score);
    this.el.finalCorrect.textContent = String(this.stats.correctCount);
    this.el.finalCombo.textContent = `x${this.stats.bestCombo}`;
    this.el.finalMisses.textContent = String(this.stats.misses);
    this.el.highScoreBadge.hidden = !this.isNewHighScore;
  }
}
