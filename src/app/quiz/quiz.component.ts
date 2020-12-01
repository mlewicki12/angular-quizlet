import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  quiz_id: string;

  constructor(private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.queryParams.subscribe(params => {
      this.quiz_id = params['id'];
    });
  }

  ngOnInit(): void {
    this.time = 10;
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
