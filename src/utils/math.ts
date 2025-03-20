// Mathematical operations
export const add = (a: string | number, b: string | number): number =>
  parseInt(String(a), 10) + parseInt(String(b), 10);

export const subtract = (a: string | number, b: string | number): number =>
  parseInt(String(a), 10) - parseInt(String(b), 10);

export const multiply = (a: number, b: number): number => a * b;

export const divide = (a: number, b: number): number => a / b;
