export type LetterEntity = {
  letter: string;
  code: string | number;
};

export type DataType = {
  id: string | number;
  code: string | number;
  letter: string;
  description: string;
  text: string;
  [key: string]: any;
};

export interface AlphabetDataset {
  category: string;
  description: string;
  icon: string;
  data: Array<DataType>;
}
