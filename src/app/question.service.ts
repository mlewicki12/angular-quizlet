import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  getQuestion() : Observable<Question> {
    const first = Math.floor(Math.random() * 10);
    const second = Math.floor(Math.random() * 10);
    const solution = first * second;

    return of({
      first: first,
      second: second,
      solution: solution,
    });
  }
}
