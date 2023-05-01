import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./modules/auth/auth.module").then((module) => module.AuthModule)
  },
  {
    path: "home",
    loadChildren: () => import("./modules/home/home.module").then((module) => module.HomeModule)
  },
  {
    path: "search",
    loadChildren: () => import("./modules/search/search.module").then((module) => module.SearchModule)
  },
  {
    path: "profile",
    loadChildren: () => import("./modules/profile/profile.module").then((module) => module.ProfileModule)
  },
  {
    path: "**",
    redirectTo: "auth"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
