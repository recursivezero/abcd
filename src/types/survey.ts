// types/survey.ts
export interface Question {
  id: number;
  questionText: string;
  type: 'singleChoice' | 'multiChoice' | 'openEnded';
  options?: string[];
}

export interface SurveyData {
  surveyTitle: string;
  description: string;
  questions: Question[];
}