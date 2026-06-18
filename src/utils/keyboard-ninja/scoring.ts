export const CORRECT_KEY_POINTS = 10;
export const CORRECT_WORD_POINTS = 25;
export const COMBO_MILESTONE = 5;
export const COMBO_BONUS_POINTS = 15;

/**
 * Returns a bonus when the combo streak (after the current hit) lands on a milestone.
 * e.g. every 5th consecutive correct hit awards a streak bonus.
 */
export function getComboBonus(comboAfterHit: number): number {
  return comboAfterHit > 0 && comboAfterHit % COMBO_MILESTONE === 0 ? COMBO_BONUS_POINTS : 0;
}
