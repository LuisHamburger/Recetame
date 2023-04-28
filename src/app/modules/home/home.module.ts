import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './pages/search/search.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FilterOptionsComponent } from './components/filter-options/filter-options.component';
import { RecipeResultsComponent } from './components/recipe-results/recipe-results.component';



@NgModule({
  declarations: [
    FilterOptionsComponent,
    RecipeResultsComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ]
})
export class HomeModule { }
