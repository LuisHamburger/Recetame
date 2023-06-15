import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./modules/auth/auth.module").then((module) => module.AuthModule)
  },
  {
    path: "red",
    loadChildren: () => import("./modules/red/red.module").then((module) => module.RedModule)
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
