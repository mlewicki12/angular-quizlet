
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'formatTime'})
export class FormatTime implements PipeTransform {
  transform(value: number) {
    const minutes = Math.floor(value / 60);
    const seconds = value % 60;

    let ret = "";
    if(minutes < 10) {
      ret = `0${minutes}:`;
    } else ret = `${minutes}:`;

    if(seconds < 10) {
      ret += `0${seconds}`;
    } else ret += `${seconds}`;

    return ret;
  }
}