import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './Services/auth-service.service';

@Component({
  selector: 'app-root',
  template:`

  <app-header></app-header>  

  <router-outlet></router-outlet>  

  <app-footer></app-footer>  
  `    
})


export class AppComponent implements OnInit {
  constructor(private authService: AuthServiceService) { }

  ngOnInit() {
    this.authService.checkLoginStatus();
  }
  

 
}
