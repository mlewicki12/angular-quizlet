import { Component, Input, OnInit } from '@angular/core';
import { Score } from '../types/score';
import { Student } from '../types/student';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() score: Score;
  @Input() name: string;

  @Input() time: number;
  @Input() type: string;

  constructor() { }

  ngOnInit(): void {
  }

}
