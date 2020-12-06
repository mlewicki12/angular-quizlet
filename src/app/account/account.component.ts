import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

  constructor(public authService: AuthService,
              private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizService.getQuizzes().subscribe(val => this.quizzes = val);
  }

  expand(id: string, visible: boolean): void {
    this.quizzes.find(val => val.id === id).visible = !visible;
  }
}
