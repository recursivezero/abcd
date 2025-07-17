export enum QuestionTypeEnum {
  SINGLE = "singleChoice",
  MULTI = "multiChoice",
  OPEN = "openEnded"
}

export type Question = {
  id: number;
  questionText: string;
  type: QuestionTypeEnum;
  options: string[];
};

export type SurveyData = {
  surveyTitle: string;
  description: string;
  questions: Question[];
};

export interface SurveyResponse {
  timestamp: string;
  responses: Record<string, string | string[]>;
}
