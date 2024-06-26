import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { RecipesToApproveComponent } from './recipes-to-approve/recipes-to-approve.component';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
  declarations: [
    AppComponent,    
    HomeComponent,    
    LoginComponent,    
    SignUpComponent,
    NewRecipeComponent,
    RecipesListComponent,
    HeaderComponent,
    FooterComponent,    
    RecipesToApproveComponent, UsersListComponent   
    
    ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule 
   
  ],
  providers: [
    provideHttpClient(withFetch())
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


