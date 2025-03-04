import {Component, computed, inject, signal} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AuthService } from './auth.service';
import {AuthDirective} from "./auth.directive";
import {LogDirective} from "./log.directive";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule, AuthDirective, LogDirective],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
  hostDirectives: [LogDirective]
})
export class AuthComponent {
  email = signal('');
  password = signal('');
  private  authService = inject(AuthService);

  isAdmin = computed(() => this.authService.activePermission() === 'admin');

  onSubmit() {
    this.authService.authenticate(this.email(), this.password());
  }
}
