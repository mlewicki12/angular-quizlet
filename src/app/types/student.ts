import { Score } from './score';

export interface Student {
  name: string;
  quiz_id: string;
  score: Score;
  id?: string;
  token: string;
}