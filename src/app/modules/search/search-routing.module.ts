import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';
import { RecipeSelectedComponent } from './pages/recipe-selected/recipe-selected.component';

const routes: Routes = [
  {
    path: "",
    component: SearchComponent
  },
  {
    path: "result",
    component: RecipeSelectedComponent,
  },
  {
    path: "**",
    redirectTo: "",
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
