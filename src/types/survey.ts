// types/survey.ts
export type Question = {
  id: number;
  questionText: string;
  type: "singleChoice" | "multiChoice" | "openEnded";
  options: string[];
};

export type SurveyData = {
  surveyTitle: string;
  description: string;
  questions: Question[];
};
