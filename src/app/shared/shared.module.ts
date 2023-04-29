import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RecipeResultsComponent } from './components/recipe-results/recipe-results.component';
import { AppRoutingModule } from '../app-routing.module';
import { IndividualRecipeComponent } from './components/individual-recipe/individual-recipe.component';



@NgModule({
  declarations: [
    NavbarComponent,
    RecipeResultsComponent,
    IndividualRecipeComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    NavbarComponent,
    RecipeResultsComponent,
    IndividualRecipeComponent
  ]
})
export class SharedModule { }
