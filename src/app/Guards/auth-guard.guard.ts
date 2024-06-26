import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoggedInService } from '../Services/logged-in.service';
import { LoggedAsAdminService } from '../Services/logged-as-admin.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loggedInService: LoggedInService, private router: Router, private loggedAsAdmin: LoggedAsAdminService) { }

  canActivate(): boolean {
    if (this.loggedInService.isLogged() || this.loggedAsAdmin.isAdminLogged()) {
      return true; // User is logged in, allow access
    } else {
      this.router.navigate(['/login']); // User is not logged in, redirect to login page
      return false;
    }
  }
}

