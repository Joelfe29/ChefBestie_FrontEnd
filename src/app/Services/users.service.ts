import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../models/Recipe';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl = 'https://localhost:7086/ChefBestieApi/User'

  constructor(private httpClient: HttpClient) {}
   
  
  getAll(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseUrl}/GetAll`);
  } 

  
}
