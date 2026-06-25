// src/data/featured-games.ts
// ─────────────────────────────────────────────
// Phase 1: Manually curated list of featured game IDs.
// IDs map to the `link` field in gamesData (without the leading slash).
//
// Phase 2 (future): This list will be supplemented / replaced by
// analytics-driven ranking using the formula:
//   score = manualBoost + visitCount + recentActivityWeight
// ─────────────────────────────────────────────

export const featuredGames: string[] = [
  "draw", // 3-5  → /draw
  "crossword", // 6-8  → /crossword
  "math", // 6-8  → /math
  "map", // Adults → /Our India
  "varnmala" // 6-8  → /varnmala
];

// Maximum number of featured games to display at once.
export const FEATURED_MAX = 5;
