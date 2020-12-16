import { Question } from './question';

export interface Solution {
  question: Question;
  correct: boolean;
  answer: string;
}