import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Score } from '../types/score';
import { Student } from '../types/student';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  time: number;
  active: boolean;
  interval: any;

  quiz_id: string;
  score: Score = {
    total: 0,
    correct: 0
  };

  student: Student = {
    name: 'Test Student',
    id: 11,
    quiz_id: '5AH9E',
    score: {
      total: 0,
      correct: 0
    }
  };

  constructor(private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.queryParams.subscribe(params => {
      this.quiz_id = params['id'];
    });
  }

  ngOnInit(): void {
    this.time = 10;
    this.active = true;

    this.interval = setInterval(() => {
      this.time--;
      if(this.time <= 0) {
        clearInterval(this.interval);
        this.active = false;
      }
    }, 1000);
  }

}
