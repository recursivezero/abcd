import type { Achievement, GameStats } from "../../types/keyboard-ninja";

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "combo-10",
    title: "10 Hit Combo",
    description: "Reach a 10-hit combo streak in a single round.",
    check: (stats: GameStats) => stats.bestCombo >= 10
  },
  {
    id: "correct-50",
    title: "50 Correct Keys",
    description: "Hit 50 correct keys in a single round.",
    check: (stats: GameStats) => stats.correctCount >= 50
  },
  {
    id: "perfect-round",
    title: "Perfect Round",
    description: "Get 25 correct hits in a round without a single miss.",
    check: (stats: GameStats) => stats.correctCount >= 25 && stats.misses === 0
  }
];
