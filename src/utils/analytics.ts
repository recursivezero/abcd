// src/utils/analytics.ts
// ─────────────────────────────────────────────────────────────────────────────
// Phase 1: Lightweight localStorage-based hit tracking.
//
// ALL analytics logic lives here — the UI (FeaturedGames.astro and game pages)
// only imports from this file. When you're ready for Phase 2, swap the
// implementation inside this file (Cloudflare Analytics / Plausible / Umami /
// custom API) without touching any component.
// ─────────────────────────────────────────────────────────────────────────────

const STORAGE_KEY = "game_hits";

/** Shape of what we store in localStorage */
type HitMap = Record<string, number>;

// ── Internal helpers ──────────────────────────────────────────────────────────

function readHits(): HitMap {
  if (typeof localStorage === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}") as HitMap;
  } catch {
    return {};
  }
}

function writeHits(map: HitMap): void {
  if (typeof localStorage === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
  } catch {
    // Storage quota exceeded or private-browsing block — fail silently.
  }
}

// ── Public API ────────────────────────────────────────────────────────────────

/**
 * Call this when a user opens / starts a game.
 * Phase 2: replace body with a fetch() to your analytics endpoint.
 */
export function trackGameVisit(gameId: string): void {
  const hits = readHits();
  hits[gameId] = (hits[gameId] ?? 0) + 1;
  writeHits(hits);
}

/**
 * Returns the total visit count for a single game.
 */
export function getGameHits(gameId: string): number {
  return readHits()[gameId] ?? 0;
}

/**
 * Returns hit counts for every tracked game, sorted descending.
 * Useful for a future "Most Played" section.
 */
export function getAllHitsSorted(): Array<{ gameId: string; hits: number }> {
  const hits = readHits();
  return Object.entries(hits)
    .map(([gameId, hits]) => ({ gameId, hits }))
    .sort((a, b) => b.hits - a.hits);
}

/**
 * Phase 2 ranking formula (not yet wired to real data).
 *
 * score = manualBoost + visitCount + recentActivityWeight
 *
 * @param gameId       - slug of the game
 * @param manualBoost  - editor-assigned priority (e.g. 100 for hand-picked)
 * @param recentWeight - extra score for recently trending (default 0 until
 *                       a real time-windowed analytics source is available)
 */
export function computeRankingScore(gameId: string, manualBoost: number = 0, recentWeight: number = 0): number {
  return manualBoost + getGameHits(gameId) + recentWeight;
}

/**
 * Metadata shape for Phase 2 — each game can carry this.
 * Extend when connecting a real analytics provider.
 */
export interface GameAnalyticsMeta {
  id: string;
  title: string;
  hits: number;
  featured: boolean;
  manualBoost?: number;
}
