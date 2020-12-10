import { Student } from './student';

export interface Quiz {
  visible?: boolean;
  name: string;
  id: string;
  total: number;
  correct: number;
  user: string;
  results: Student[];
}

export interface QuizDb {
  id: string;
  data: Quiz;
}