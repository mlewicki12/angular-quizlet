import { Student } from './student';

export interface Quiz {
  name: string;
  id: string;
  visible?: boolean;
  total: number;
  correct: number;
  results: Student[];
}