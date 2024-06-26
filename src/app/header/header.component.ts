import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedInService } from '../Services/logged-in.service';
import { LoggedAsAdminService } from '../Services/logged-as-admin.service';
import { AuthServiceService } from '../Services/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  LoggedIn = false; 
  LoggedAsAdmin = false; 

  constructor(
    private loggedInService: LoggedInService, 
    private loggedAsAdminService: LoggedAsAdminService, 
    private router: Router
  ) {}

  ngOnInit() {
    // Subscribe to the login state
    this.loggedInService.isLogged().subscribe((loggedIn: boolean) => {
      this.LoggedIn = loggedIn;
    });

    // Subscribe to the admin state
    this.loggedAsAdminService.isAdminLogged().subscribe((loggedAsAdmin: boolean) => {
      this.LoggedAsAdmin = loggedAsAdmin;
    });    
  }
  
  onLogout() {
    this.loggedInService.logout();
    this.loggedAsAdminService.logout();
    alert('You have logged out.');
    this.router.navigate(['/home']);
  }
}
