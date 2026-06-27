import type { PowerUpType } from "../../types/keyboard-ninja";

/** Chance (0-1) that any given spawn produces a power-up instead of a normal item. */
export const POWER_UP_SPAWN_CHANCE = 0.1;

export const POWER_UP_TYPES: PowerUpType[] = ["slowMotion", "doubleScore", "extraLife"];

/** Single key each power-up is sliced with — kept distinct from each level's
 * own pool where reasonably possible, though a rare overlap (e.g. level 1's
 * alphabet already contains "L") is harmless: pressing the key just slices
 * whichever matching item exists. */
export const POWER_UP_KEYS: Record<PowerUpType, string> = {
  slowMotion: "L",
  doubleScore: "X",
  extraLife: "H"
};

export const POWER_UP_DISPLAY: Record<PowerUpType, { icon: string; label: string }> = {
  slowMotion: { icon: "🐢", label: "Slow Motion" },
  doubleScore: { icon: "✨", label: "Double Score" },
  extraLife: { icon: "❤️", label: "Extra Life" }
};

export const SLOW_MOTION_DURATION_MS = 7000;
export const DOUBLE_SCORE_DURATION_MS = 8000;
export const SLOW_MOTION_FALL_MULTIPLIER = 1.7;
export const MAX_LIVES = 5;
