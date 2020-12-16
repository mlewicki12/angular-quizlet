import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Question } from '../types/question';
import { QuestionService } from '../services/question.service';
import { Solution } from '../types/solution';
import { Score } from '../types/score';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})

export class QuestionComponent implements OnInit {
  question: Question;
  solution: Solution;
  answer: string;

  @Input() active: boolean;
  @Input() score: Score;
  @Output() scoreChange = new EventEmitter<Score>();

  @HostListener('window:keyup.enter') 
  @HostListener('window:keyup.shift.enter')
  enterEvent() {
    this.submit();
  }

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

    this.solution = {
      question: this.question,
      answer: this.answer,
      correct: correct
    };

    this.answer = "";

    this.questionService.getQuestion().subscribe(que => this.question = que);
  }
}
