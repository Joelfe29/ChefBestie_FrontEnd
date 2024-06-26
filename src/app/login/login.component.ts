import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoggedInService } from '../Services/logged-in.service';
import { LoggedAsAdminService } from '../Services/logged-as-admin.service';
import { AuthServiceService } from '../Services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    private loggedIn: LoggedInService,
    private loggedAsAdmin: LoggedAsAdminService,
    private authService: AuthServiceService
  ) {}

  onSubmit() {
    this.http.post('https://localhost:7086/ChefBestieApi/Login/Post', this.loginData).subscribe((response: any) => {
      console.log('Login successful', response);

      console.log('Received token:', response.token);

      if (response && typeof response.admin !== 'undefined') {
        this.loggedIn.login();

        // Store token in localStorage
        if (this.isBrowser()) {
          localStorage.setItem('authToken', response.token);
          localStorage.setItem('isAdmin', response.admin.toString());
        }

        if (response.admin) {
          this.loggedAsAdmin.login();
          alert(`Welcome Admin ${this.loginData.email}`);
        } else {
          alert(`Welcome User ${this.loginData.email}`);
        }

        this.authService.login(response.token);
        this.router.navigate(['./home']);
      } else {
        alert('Login response did not include a valid admin property.');
      }
    }, error => {
      console.error('Login failed', error);
      alert('Wrong email or password, please try again');
    });
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}

