import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  time: number;
  active: boolean;
  interval: any;

  total: number;
  correct: number;

  constructor() { }

  ngOnInit(): void {
    this.time = 180;
    this.active = true;

    this.total = 0;
    this.correct = 0;

    this.interval = setInterval(() => {
      this.time--;
      if(this.time <= 0) {
        clearInterval(this.interval);
        this.active = false;
      }
    }, 1000);
  }

}
