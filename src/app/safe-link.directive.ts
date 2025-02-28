import {Directive, ElementRef, HostListener, inject, input} from "@angular/core";

@Directive({
  selector: "a[safeLink]",
  standalone: true
})
export class SafeLinkDirective{

  queryParam = input<string>('myapp', {
    alias: "safeLink"
  });

  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef)

  constructor() {
  console.log("safe link");
  }
  @HostListener('click', ['$event'])
  onClick(event: MouseEvent){
    const wantsToLeave = window.confirm("Do you want to leave the page?");
    const address = this.hostElementRef.nativeElement.href;
    this.hostElementRef.nativeElement.href  = address + "?from=" + this.queryParam();
    if(wantsToLeave){
      return;
    }
    event.preventDefault();
    console.log("Prevented from going to another page.")
  }
}
