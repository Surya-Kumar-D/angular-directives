import {Directive, effect, inject, input} from '@angular/core';
import {AuthService} from "./auth.service";

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {

  userType = input.required<string>({
    alias: 'appAuth'
  });
  private authService = inject(AuthService);
  constructor() {
    effect(()=> {
      if(this.authService.activePermission() === this.userType()) {
        console.log("show element");
      }
      else {
        console.log("Don not show element.");
      }
    })
  }

}
