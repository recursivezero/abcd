// Input validation functions
export const isAlphabet = (key: number): boolean => (65 <= key && key <= 90) || (key >= 97 && key <= 122);

export const isNumber = (key: number): boolean => 48 <= key && key <= 57;
