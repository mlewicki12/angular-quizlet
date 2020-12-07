import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { QuizService } from '../services/quiz.service';
import { Quiz } from '../types/quiz';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  quizzes: Quiz[];
  quizName: string;

  constructor(public authService: AuthService,
              private quizService: QuizService,
              private router: Router) { }

  ngOnInit(): void {
    this.quizService.getQuizzes().subscribe(val => this.quizzes = val);
    console.log(window.location.href);
  }

  expand(id: string, visible: boolean): void {
    var quiz = this.quizzes.find(val => val.id === id);
    if(quiz.data.results.length > 0) {
      this.quizzes.find(val => val.id === id).visible = !visible;
    }
  }

  addQuiz(): void {
    this.quizService.newQuiz(this.quizName);
  }
}
