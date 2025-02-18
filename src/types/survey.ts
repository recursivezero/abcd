// types/survey.ts
export type Question ={
  id: number;
  questionText: string;
  type: 'singleChoice' | 'multiChoice' | 'openEnded';
  options: string[] | null;
}

export type SurveyData ={
  surveyTitle: string;
  description: string;
  questions: Question[];
}