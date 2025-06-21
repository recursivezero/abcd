export type LetterEntity = {
  letter: string;
  code: string | number;
};

export interface AlphabetEntry {
  id: number | string; 
  letter: string;
  code?: number;
  text: string;
  description: string;
  emoji?: string;
  image?: string;
  englishSound?: string;
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

export interface GreekAlphabetEntry {
  id: number;
  letter: string;
  text: string;
  code: number;
  englishSound: string;
  description: string;
}
export interface GeekAlphabetEntry {
  id: string;
  letter: string;
  name: string;
  representations: string[];
}
