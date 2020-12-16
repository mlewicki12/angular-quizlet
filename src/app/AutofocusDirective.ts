
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[qzAutofocus]'
})
export class AutofocusDirective {
  constructor(private host: ElementRef) {}

  ngAfterViewInit() {
    this.host.nativeElement.focus();
  }
}