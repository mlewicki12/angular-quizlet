import { Student } from './student';

export interface Quiz {
  name: string;
  id: string;
  total: number;
  correct: number;
  results: Student[];
}