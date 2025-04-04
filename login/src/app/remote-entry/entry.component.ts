import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from '@angular-monorepo/login-form';

@Component({
  imports: [CommonModule, LoginFormComponent ],
  selector: 'app-login-entry',
  template: `<lib-login-form></lib-login-form>`,
})
export class RemoteEntryComponent {}
