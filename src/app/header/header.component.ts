import { Component, Input, OnInit } from '@angular/core';
import { HeaderType } from '../headertype';
import { Student } from '../student';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  student: Student = {
    name: 'Test Student',
    id: 11,
    quiz_id: '5AH9E',
    score: {
      total: 0,
      correct: 0
    }
  };

  @Input() type: HeaderType;
  @Input() time: number;

  constructor() { }

  ngOnInit(): void {
  }

}
