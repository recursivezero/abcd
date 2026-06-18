import type { LeaderboardEntry } from "../../types/keyboard-ninja";

const LEADERBOARD_KEY = "kn-leaderboard";
const ACHIEVEMENTS_KEY = "kn-achievements";
const MAX_LEADERBOARD_ENTRIES = 10;

function safeParse<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function getLeaderboard(): LeaderboardEntry[] {
  if (typeof window === "undefined") return [];
  return safeParse<LeaderboardEntry[]>(window.localStorage.getItem(LEADERBOARD_KEY), []);
}

export function addLeaderboardEntry(entry: LeaderboardEntry): LeaderboardEntry[] {
  if (typeof window === "undefined") return [];
  const updated = [...getLeaderboard(), entry].sort((a, b) => b.score - a.score).slice(0, MAX_LEADERBOARD_ENTRIES);
  window.localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(updated));
  return updated;
}

export function getUnlockedAchievementIds(): string[] {
  if (typeof window === "undefined") return [];
  return safeParse<string[]>(window.localStorage.getItem(ACHIEVEMENTS_KEY), []);
}

export function saveUnlockedAchievementIds(ids: string[]): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(ACHIEVEMENTS_KEY, JSON.stringify(ids));
}
