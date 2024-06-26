import { Component, OnInit } from '@angular/core';
import { UsersService } from '../Services/users.service';
import { User } from '../models/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit{

  
  users: User[];


  constructor(private usersService: UsersService) {
    this.users = [];
  }

  ngOnInit() {
    this.usersService.getAll().subscribe((data) => {
      this.users = data;
    });
  }
}
