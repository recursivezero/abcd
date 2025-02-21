export type LetterEntity = {
  letter: string;
  code: string | number;
};

export interface AlphabetEntry {
  id: number;
  letter: string;
  code: number;
  text: string;
  description: string;
}

export interface AlphabetCategory {
  description: string;
  data: AlphabetEntry[];
}

export interface AlphabetsData {
  general: AlphabetCategory;
  nato: AlphabetCategory;
  braille: AlphabetCategory;
  fruits: AlphabetCategory;
  animals: AlphabetCategory;
  countries: AlphabetCategory;
}
