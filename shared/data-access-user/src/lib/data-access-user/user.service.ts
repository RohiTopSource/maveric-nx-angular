import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class UserService {
    private isUserLoggedIn:BehaviorSubject<boolean> = new BehaviorSubject(false);

    isUserLoggedIn$:Observable<boolean> = this.isUserLoggedIn.asObservable();

    checkCredentials(username:string, password:string):void{
        if(username === "demo" && password === "demo"){
            this.isUserLoggedIn.next(true);
        }else{
            this.isUserLoggedIn.next(false);
        }
    }

    logOut():void{
      this.isUserLoggedIn.next(false);
    }   
}