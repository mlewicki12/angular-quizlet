import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from '../types/question';
import { QuestionService } from '../question.service';
import { Solution } from '../types/solution';
import { Score } from '../types/score';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})

export class QuestionComponent implements OnInit {
  question: Question;
  lastSolution: Solution;
  answer: string;
  @Input() active: boolean;

  @Input() score: Score;
  @Output() scoreChange = new EventEmitter<Score>();

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.questionService.getQuestion().subscribe(que => this.question = que);
  }

  submit() {
    if(!this.active) return;

    this.score.total++;

    var correct = false;
    if(parseInt(this.answer) === this.question.solution) {
      correct = true;
      this.score.correct++;
    }

    this.scoreChange.emit(this.score);

    this.answer = "";
    this.lastSolution = {
      question: this.question,
      correct: correct
    };

    this.questionService.getQuestion().subscribe(que => this.question = que);
  }
}
