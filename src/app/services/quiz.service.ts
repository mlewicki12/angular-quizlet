import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Quiz } from '../types/quiz';
import { Student } from '../types/student';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  private randomString(size: number) : string {
    var ret = "";
    for(var i = 0; i < size; ++i) {
      ret += this.possibleChars[Math.floor(Math.random() * this.possibleChars.length)];
    }

    return ret;
  }

  private quizzesStore: AngularFirestoreCollection<Quiz>;
  quizzes: Quiz[];

  constructor(firestore: AngularFirestore) {
    this.quizzesStore = firestore.collection('quizzes');
  }

  newQuiz(name: string): Observable<Quiz> {
    const quiz_id = this.randomString(5);
    console.log(`generating new quiz, id:${quiz_id}`);

    return of({
      id: quiz_id,
      name: name,
      total: 0,
      correct: 0,
      results: []
    });
  }

  getQuizzes(): Observable<Quiz[]> {
    return this.quizzesStore.snapshotChanges().pipe(
      tap(console.log),
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, data };
      })),
      tap(console.log)
    );
  }

  saveScore(student: Student) {
    console.log('saving student score (someday)');
    console.log(student);
  }
}
