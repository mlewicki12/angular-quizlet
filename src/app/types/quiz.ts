import { Student } from './student';

export interface Quiz {
  id: string;
  visible?: boolean;
  data: QuizData;
}

export interface QuizData {
  name: string;
  total: number;
  correct: number;
  results: Student[];
}