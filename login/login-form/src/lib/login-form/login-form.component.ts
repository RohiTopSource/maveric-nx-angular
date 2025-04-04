import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from '@angular-monorepo/data-access-user';

@Component({
  selector: 'lib-login-form',
  standalone:true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  username = '';
  password = '';

  private userService = inject(UserService);
  isLoggedIn$:Observable<boolean> = this.userService.isUserLoggedIn$;

  login():void{
    this.userService.checkCredentials(this.username, this.password);
  }

}
