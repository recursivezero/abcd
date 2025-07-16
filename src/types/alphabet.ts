export type LetterEntity = {
  letter: string;
  code: string | number;
};

export type AlphabetDataItem = {
  id?: string | number;
  code: string | number;
  letter: string;
  description?: string;
  text: string;
  [key: string]: any;
};

export interface AlphabetDataset {
  category: string;
  description: string;
  icon: string;
  data: Array<AlphabetDataItem>;
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
