import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RecipeResultsComponent } from './components/recipe-results/recipe-results.component';



@NgModule({
  declarations: [
    NavbarComponent,
    RecipeResultsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NavbarComponent,
    RecipeResultsComponent
  ]
})
export class SharedModule { }
