import { Component, NgModule } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrl: './new-recipe.component.css'
})
export class NewRecipeComponent { 
  
  form: FormGroup;  


  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      timeToMake: ['', Validators.required],
      difficulty: ['', Validators.required],
      ingredients: this.fb.array([this.createIngredient()])
    });
  }

  get ingredients() {
    return this.form.get('ingredients') as FormArray;
  }

  createIngredient(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      quantity: ['', Validators.required],
      unity: ['', Validators.required]
    });
  }  
  
  addIngredient() {
    this.ingredients.push(this.createIngredient());
    console.log("ingredient added");
  }

  removeIngredient(index: number) {
    this.ingredients.removeAt(index);
    console.log("ingredient removed");
  } 


  onSubmit() {
    if (this.form.valid) {
      const newRecipe = this.form.value;
      console.log('Form Data:', newRecipe); // Debugging form data before sending to the server
      this.http.post('https://localhost:7086/ChefBestieApi/Recipe/Post/add-update', newRecipe).subscribe(response => {
        console.log('Recipe submission successful', response);
        alert(`You have submitted a new recipe: ${newRecipe.title}`);
        this.router.navigate(['./home']); // Navigate to home page after submission
      }, error => {
        console.error('Recipe submission failed', error);
      });
    } else {
      console.error('Form is invalid');
    }
  }

  public onSubmitClick(){
  this.router.navigate(['./newrecipe']);
  }

}

 



  




