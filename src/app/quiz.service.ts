import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Quiz } from './types/quiz';
import { Student } from './types/student';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private QUIZZES: Quiz[] = [
    {
      name: '5A',
      id: '5EHF6',
      total: 11,
      correct: 8,
      results: [
        {
          name: 'skylar',
          id: 1,
          score: {
            total: 5,
            correct: 3
          }
        },
        {
          name: 'walt',
          id: 2,
          score: {
            total: 6,
            correct: 5
          }
        },
        {
          name: 'flynn',
          id: 3,
          score: {
            total: 4,
            correct: 4
          }
        }
      ]
    }
  ];


  private possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  private randomString(size: number) : string {
    var ret = "";
    for(var i = 0; i < size; ++i) {
      ret += this.possibleChars[Math.floor(Math.random() * this.possibleChars.length)];
    }

    return ret;
  }

  constructor() { }

  newQuiz(): Observable<Quiz> {
    const quiz_id = this.randomString(5);
    console.log(`generating new quiz, id:${quiz_id}`);

    return of({
      id: quiz_id,
      results: []
    });
  }

  getQuizzes(): Observable<Quiz[]> {
    return of(this.QUIZZES);
  }

  saveScore(student: Student) {
    console.log('saving student score (someday)');
    console.log(student);
  }
}
