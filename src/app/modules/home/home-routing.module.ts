import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RandomComponent } from './pages/random/random.component';
import { ByLevelComponent } from './pages/by-level/by-level.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
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
    path: "**",
    redirectTo: "random"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
