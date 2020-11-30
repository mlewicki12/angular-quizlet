import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  @Input() time: number;

  constructor() { }

  ngOnInit(): void {
  }

  formatTime(sec: number): string {
    return `${Math.floor(this.time / 60)}:${this.time % 60}`;
  }

}
