import { Score } from './score';
import { Student } from './student';

export interface Quiz {
  name: string;
  id: string;
  user: string;
  score?: Score;
}

export interface QuizDb {
  id: string;
  data: Quiz;
  visible?: boolean;
  scores?: Student[];
  link?: string;
}