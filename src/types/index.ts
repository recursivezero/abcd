declare global {
  interface Array<T> {
    sortBy<K extends keyof T>(key: K): T[];
  }
}

export type { LetterEntity } from "./alphabet";
export type { BlogCardProps, BlogMeta, BlogPost } from "./blog";
export type { LinkProps } from "./link";
export type { Question, SurveyData } from "./survey";
export type { Zodiac } from "./zodiac";
