import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';
import { Quiz, QuizDb } from '../types/quiz';
import { Score } from '../types/score';
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
  private scoresStore: AngularFirestoreCollection<Student>;
  quizzes: Quiz[];

  constructor(firestore: AngularFirestore) {
    this.quizzesStore = firestore.collection('quizzes');
    this.scoresStore = firestore.collection('scores');
  }

  newQuiz(name: string, id: string): Promise<DocumentReference<Quiz>> {
    const quiz_id = this.randomString(5);
    console.log(`generating new quiz, id:${quiz_id}`);

    const quiz = {
      id: quiz_id,
      user: id,
      name: name,
    };

    return new Promise<DocumentReference<Quiz>>((resolve, reject) => {
      this.quizzesStore.add(quiz).then(res => resolve(res), err => reject(err))
    });
  }

  deleteQuiz(id: string): void {
    this.quizzesStore.doc(id).delete().then(() => console.log(`successfully deleted quiz ${id}`), () => console.log(`couldn't delete quiz ${id}`));
  }

  deleteScore(id: string): void {
    this.scoresStore.doc(id).delete().then(() => console.log(`successfully deleted quiz ${id}`, () => console.log(`couldn't delete quiz ${id}`)));
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
    return new Promise<DocumentReference<Student>>((resolve, reject) => {
      this.scoresStore.add(student).then(res => resolve(res), err => reject(err));
    })
  }

  getScores(id: string) {
    return this.scoresStore.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, data };
      })),
      map(val => val.filter(obj => {
        return obj.data.quiz_id === id;
      }))
    );
  }
}
