import {Directive, ElementRef, HostListener, inject} from '@angular/core';

@Directive({
  selector: '[appLog]',
  standalone: true
})
export class LogDirective {

  private  elementRef = inject(ElementRef);

  constructor() { }

  @HostListener('click') onClick() {
    console.log("I am Being Clicked!!");
    console.log(this.elementRef.nativeElement);
  }
}
