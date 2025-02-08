export const varnmala = Array.from(
  { length: 26 },
  (_, i) => String.fromCodePoint(65 + i)
);

export const getRandomValue = <T>(arr: T[] = []): T => 
  arr[Math.floor(Math.random() * arr.length)];

export const isAlphabet = (key: number): boolean => 
  (65 <= key && key <= 90) || (key >= 97 && key <= 122);

export const isNumber = (key: number): boolean => 
  48 <= key && key <= 57;

export const add = (a: string | number, b: string | number): number => 
  parseInt(String(a), 10) + parseInt(String(b), 10);

export const subtract = (a: string | number, b: string | number): number => 
  parseInt(String(a), 10) - parseInt(String(b), 10);

export const multiply = (a: number, b: number): number => a * b;