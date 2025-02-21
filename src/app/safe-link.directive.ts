import {Directive, HostListener} from "@angular/core";

@Directive({
  selector: "a[safeLink]",
  standalone: true,

})
export class SafeLinkDirective{
  constructor() {
  console.log("safe link");
  }
  @HostListener('click', ['$event'])
  onClick(event: MouseEvent){
    const wantsToLeave = window.confirm("Do you want to leave the page?");
    if(wantsToLeave){
      return;
    }
    event.preventDefault();
    console.log("Prevented from going to another page.")
  }
}
