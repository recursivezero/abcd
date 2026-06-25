export type GameStatus = "idle" | "countdown" | "playing" | "gameover";

export type ItemType = "letter" | "number" | "word";

export type ItemState = "falling" | "sliced";

export interface FallingItemData {
  id: string;
  value: string;
  type: ItemType;
  leftPercent: number;
  durationMs: number;
  state: ItemState;
  powerUp?: PowerUpType;
}

export interface LevelConfig {
  id: number;
  name: string;
  type: ItemType;
  pool: string[];
  spawnIntervalMs: number;
  minDurationMs: number;
  maxDurationMs: number;
}

export interface GameStats {
  score: number;
  lives: number;
  misses: number;
  combo: number;
  bestCombo: number;
  correctCount: number;
}

export type PowerUpType = "slowMotion" | "doubleScore" | "extraLife";

export interface ActivePowerUps {
  slowMotion: boolean;
  doubleScore: boolean;
}

export interface LeaderboardEntry {
  score: number;
  levelName: string;
  date: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  check: (stats: GameStats) => boolean;
}
