import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggedAsAdminService {
  private isAdminSubject = new BehaviorSubject<boolean>(false);

  login() {
    this.isAdminSubject.next(true);
  }

  logout() {
    this.isAdminSubject.next(false);
  }

  isAdminLogged(): Observable<boolean> {
    return this.isAdminSubject.asObservable();
  }
}

