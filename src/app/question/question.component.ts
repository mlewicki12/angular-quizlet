import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../question.service';
import { Solution } from '../solution';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})

export class QuestionComponent implements OnInit {
  question : Question;
  lastSolution : Solution;
  answer : string;

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.questionService.getQuestion().subscribe(que => this.question = que);
  }

  submit() {
    var correct = false;
    if(parseInt(this.answer) === this.question.solution) {
      correct = true;
    }

    this.answer = "";
    this.lastSolution = {
      question: this.question,
      correct: correct
    };

    this.questionService.getQuestion().subscribe(que => this.question = que);
  }
}
