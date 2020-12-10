import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';
import { Quiz, QuizDb } from '../types/quiz';
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

  newQuiz(name: string, id: string): Promise<DocumentReference<Quiz>> {
    const quiz_id = this.randomString(5);
    console.log(`generating new quiz, id:${quiz_id}`);

    const quiz = {
      id: quiz_id,
      user: id,
      name: name,
      total: 0,
      correct: 0,
      results: []
    };

    return new Promise<DocumentReference<Quiz>>((resolve, reject) => {
      this.quizzesStore.add(quiz).then(res => resolve(res), err => reject(err))
    });
  }

  getQuizzes(id: string): Observable<QuizDb[]> {
    return this.quizzesStore.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, data };
      })),
      map(val => val.filter(obj => obj.data.user === id))
    );
  }

  saveScore(student: Student) {
    console.log('saving student score (someday)');
    console.log(student);
  }
}
