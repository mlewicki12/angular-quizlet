import { Student } from './student';

export interface Quiz {
  visible?: boolean;
  name: string;
  id: string;
  total: number;
  correct: number;
  results: Student[];
  data?: any;
}