import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { QuizService } from '../quiz.service';
import { Quiz } from '../types/quiz';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  private quizzes: Quiz[];

  constructor(public authService: AuthService,
              private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizService.getQuizzes().subscribe(val => this.quizzes = val);
  }

}
