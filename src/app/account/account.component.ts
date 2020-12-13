import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { QuizService } from '../services/quiz.service';
import { Quiz, QuizDb } from '../types/quiz';
import { map } from 'rxjs/operators';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user: any;
  quizzes: QuizDb[];
  quizName: string;

  constructor(public authService: AuthService,
              private quizService: QuizService,
              private router: Router,
              private clipboard: Clipboard) { 
    this.authService.user$.subscribe(user => {
      console.log(user);
      this.user = user;
      this.quizService.getQuizzes(user.sub).subscribe(val => {
        val.forEach(quiz => {
          quiz.link = window.location.origin + this.router.createUrlTree(['quiz', quiz.data.id]).toString();
        });

        this.quizzes = val
      });
    });
  }

  ngOnInit(): void { }

  expand(id: string): void {
    var quiz = this.quizzes.find(val => val.data.id === id);
    console.log(quiz);
    if(!quiz.visible) {
      if(!quiz.scores) {
        this.quizService.getScores(quiz.data.id).pipe(
            map(val => val.map(item => item.data)))
          .subscribe(val => {
            quiz.scores = val;
            quiz.data.score = quiz.scores.reduce((total, val) => {
              total.total += val.score.total;
              total.correct += val.score.correct;
              return total;},
              {total: 0, correct: 0});
        });
      }
    }

    quiz.visible = !quiz.visible;
  }

  copyLink(link: string) {
    console.log('copying to clipboard: ' + link);
    this.clipboard.copy(link);
  }

  addQuiz(): void {
    this.quizService.newQuiz(this.quizName, this.user.sub);
    this.quizName = "";
  }
}
