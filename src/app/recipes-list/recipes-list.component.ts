import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/Recipe';
import { RecipesService } from '../Services/recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent implements OnInit{

  recipes: Recipe[];


  constructor(private recipesService: RecipesService) {
    this.recipes = [];
  }

  ngOnInit() {
    this.recipesService.getAll().subscribe((data) => {
      this.recipes = data;
    });
  }
  

}
