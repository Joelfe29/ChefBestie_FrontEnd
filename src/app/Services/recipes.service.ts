import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../models/Recipe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private baseUrl = 'https://localhost:7086/ChefBestieApi/Recipe'

  constructor(private httpClient: HttpClient) {}
   
  
  getAll(): Observable<Recipe[]>{
    return this.httpClient.get<Recipe[]>(`${this.baseUrl}/GetAll`);
  }  
  
}