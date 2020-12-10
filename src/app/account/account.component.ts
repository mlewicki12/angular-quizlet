import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { QuizService } from '../services/quiz.service';
import { Quiz, QuizDb } from '../types/quiz';

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
              private quizService: QuizService) { 
    this.authService.user$.subscribe(user => {
      console.log(user);
      this.user = user;
      this.quizService.getQuizzes(user.sub).subscribe(val => this.quizzes = val);
    });
  }

  ngOnInit(): void {
    console.log(window.location.href);
  }

  expand(id: string, visible: boolean): void {
    var quiz = this.quizzes.find(val => val.id === id);
    if(quiz.data.results.length > 0) {
      this.quizzes.find(val => val.id === id).data.visible = !visible;
    }
  }

  addQuiz(): void {
    this.quizService.newQuiz(this.quizName, this.user.sub);
  }
}
