import type { LevelConfig } from "../../types/keyboard-ninja";

export const LEVELS: LevelConfig[] = [
  {
    id: 1,
    name: "Letters",
    type: "letter",
    pool: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
    spawnIntervalMs: 1400,
    minDurationMs: 4500,
    maxDurationMs: 6000
  },
  {
    id: 2,
    name: "Numbers",
    type: "number",
    pool: "0123456789".split(""),
    spawnIntervalMs: 1300,
    minDurationMs: 4200,
    maxDurationMs: 5800
  },
  {
    id: 3,
    name: "Mixed",
    type: "letter",
    pool: ["A", "7", "K", "3", "M", "9", "Z", "2", "Q", "5", "B", "1", "F", "8"],
    spawnIntervalMs: 2200,
    minDurationMs: 3800,
    maxDurationMs: 5200
  },
  {
    id: 4,
    name: "Words",
    type: "word",
    pool: ["CAT", "DOG", "SUN", "BAT", "PIG", "HEN", "BEE", "FOX", "OWL", "COW", "ANT", "BUS"],
    spawnIntervalMs: 3200,
    minDurationMs: 6500,
    maxDurationMs: 8500
  }
];

export function getLevelById(id: number): LevelConfig {
  return LEVELS.find((level) => level.id === id) ?? LEVELS[0];
}
