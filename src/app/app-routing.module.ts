import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesToApproveComponent } from './recipes-to-approve/recipes-to-approve.component';
import { UsersListComponent } from './users-list/users-list.component';




const routes: Routes = [

{  
  path: '',
  component: HomeComponent,  
},
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'signup',
  component: SignUpComponent
},
{
  path: 'recipes',
  component: RecipesListComponent  
},
{
  path: 'newrecipe',
  component: NewRecipeComponent
},
{
  path: 'recipesToApprove',
  component: RecipesToApproveComponent
},
{
  path: 'users',
  component: UsersListComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
