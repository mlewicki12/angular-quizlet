import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../question.service';
import { Solution } from '../solution';

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

  @Input() correct: number;
  @Output() correctChange = new EventEmitter<number>();

  @Input() total: number;
  @Output() totalChange = new EventEmitter<number>();

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.questionService.getQuestion().subscribe(que => this.question = que);
    this.correct = 0;
    this.total = 0;
  }

  submit() {
    if(!this.active) return;

    this.total++;
    this.totalChange.emit(this.total);

    var correct = false;
    if(parseInt(this.answer) === this.question.solution) {
      correct = true;
      this.correct++;
      this.correctChange.emit(this.correct);
    }

    this.answer = "";
    this.lastSolution = {
      question: this.question,
      correct: correct
    };

    this.questionService.getQuestion().subscribe(que => this.question = que);
  }
}
