import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../services/quiz.service';
import { Score } from '../types/score';
import { Student } from '../types/student';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  time: number;
  started: boolean;
  active: boolean;
  interval: any;

  name: string;
  quiz_id: string;
  score: Score = {
    total: 0,
    correct: 0
  }; 

  student: Student;

  constructor(private activatedRoute: ActivatedRoute, 
              private quizService: QuizService) { 
    this.time = 10;
    this.started = false;
    this.active = false;
  }

  ngOnInit(): void {
  }

  submitName() {
    this.quiz_id = this.activatedRoute.snapshot.paramMap.get('id');
    this.started = true;
    this.active = true;

    const token = this.quizService.registerAttempt(this.name, this.quiz_id);
    this.interval = setInterval(() => {
      this.time--;
      if(this.time <= 0) {
        clearInterval(this.interval);
        this.active = false;

        this.quizService.saveScore({
          name: this.name,
          quiz_id: this.quiz_id,
          score: this.score,
          token: token
        });
      }
    }, 1000);
  }
}
