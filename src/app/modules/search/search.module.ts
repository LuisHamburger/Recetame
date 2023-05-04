import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './pages/search/search.component';
import { FilterOptionsComponent } from './components/filter-options/filter-options.component';
import { SharedModule } from '../../shared/shared.module';
import { RecipeSelectedComponent } from './pages/recipe-selected/recipe-selected.component';
import { SearchRoutingModule } from './search-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FilterOptionsComponent,
    SearchComponent,
    RecipeSelectedComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SearchRoutingModule,
    SharedModule
  ]
})
export class SearchModule { }
