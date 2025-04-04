import { UserService } from '@angular-monorepo/data-access-user';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { distinctUntilChanged, Observable } from 'rxjs';
// import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  imports: [RouterModule,CommonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
private userService = inject(UserService);
private router = inject(Router);
isLoggedIn$: Observable<boolean> = this.userService.isUserLoggedIn$;


ngOnInit(): void {
    this.isLoggedIn$.pipe(
      distinctUntilChanged()
    ).subscribe((loggedIn)=> {
         setTimeout(()=> {
          if(!loggedIn){
              this.router.navigateByUrl('login');
          }else{
            this.router.navigateByUrl('');
          }
         })
    })
}

}
