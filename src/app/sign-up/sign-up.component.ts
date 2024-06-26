import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  signUpData = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }; 

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.http.post('https://localhost:7086/ChefBestieApi/User/Post/add-update', this.signUpData).subscribe(response => {
      console.log('Login successful', response);      
      const message = `Welcome to the family ${this.signUpData.email}`;
      alert(message);  
      this.router.navigate(['./home']);      
  });
}

}
