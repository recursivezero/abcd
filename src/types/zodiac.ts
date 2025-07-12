export type Language = { english: string; hindi: string };
export type Zodiac = {
  name: Language;
  dates: Language;
  image: Language;
  description: Language;
  points: {
    english: string[];
    hindi: string[];
  };
};

export type ZodiacKeys = keyof Zodiac;
