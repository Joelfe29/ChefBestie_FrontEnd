import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggedInService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);

  login() {
    this.isLoggedInSubject.next(true);
  }

  logout() {
    this.isLoggedInSubject.next(false);
  }

  isLogged(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }

}