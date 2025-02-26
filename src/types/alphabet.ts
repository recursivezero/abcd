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
  image?: string;
}

export interface AlphabetCategory {
  description: string;
  icon: string;
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
