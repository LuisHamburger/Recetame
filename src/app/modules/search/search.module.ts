import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './pages/search/search.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FilterOptionsComponent } from './components/filter-options/filter-options.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    FilterOptionsComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ]
})
export class SearchModule { }
