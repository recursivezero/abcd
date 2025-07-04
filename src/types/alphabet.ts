export type LetterEntity = {
  letter: string;
  code: string | number;
};

export interface AlphabetEntry {
  id?: number | string;
  description?: string;
  letter: string;
  text: string;
  emoji?: string;
  image?: string;
  englishSound?: string;
  code?: string | number;
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

export type CardSectionType = {
  id?: string | number;
  icon?: string;
  kind?: string;
  title: string;
  description: string;
  href: {
    playground: {
      link: string;
      icon: string;
      text: string;
    };
    board?: {
      link: string;
      icon: string;
      text: string;
    };
  };
};
