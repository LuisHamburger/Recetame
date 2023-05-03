import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RecipeResultsComponent } from './components/recipe-results/recipe-results.component';
import { IndividualRecipeComponent } from './components/individual-recipe/individual-recipe.component';
import { RouterModule } from '@angular/router';
import { RecipePostComponent } from './components/recipe-post/recipe-post.component';



@NgModule({
  declarations: [
    NavbarComponent,
    RecipeResultsComponent,
    IndividualRecipeComponent,
    RecipePostComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    RecipeResultsComponent,
    IndividualRecipeComponent,
    RecipePostComponent
  ]
})
export class SharedModule { }
