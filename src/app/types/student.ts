import { Score } from './score';

export interface Student {
  name: string;
  id?: number;
  quiz_id: string;
  score: Score;
}