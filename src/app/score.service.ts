import { Injectable } from '@angular/core';
import { Student } from './types/student';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor() { }

  submitScore(student: Student) {
    console.log('doing this soon');
    console.log(student);
  }
}
