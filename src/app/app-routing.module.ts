import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/pages/login/login.component';
import { RegisterComponent } from './modules/auth/pages/register/register.component';
import { SearchComponent } from './modules/search/pages/search/search.component';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { RandomComponent } from './modules/home/pages/random/random.component';
import { ByLevelComponent } from './modules/home/pages/by-level/by-level.component';
import { RecipeSelectedComponent } from './modules/search/pages/recipe-selected/recipe-selected.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "search",
    component: SearchComponent
  },
  {
    path: "random",
    component: RandomComponent
  },
  {
    path: "level",
    component: ByLevelComponent
  },
  {
    path: "result",
    component: RecipeSelectedComponent
  },
  {
    path: "**",
    redirectTo: "login"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
