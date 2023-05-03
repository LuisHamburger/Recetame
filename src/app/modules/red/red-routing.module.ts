import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedComponent } from './pages/red/red.component';
import { UploadPostComponent } from './pages/upload-post/upload-post.component';

const routes: Routes = [
  {
    path: "",
    component: RedComponent,
  },
  {
    path: "upload",
    component: UploadPostComponent,
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RedRoutingModule { }
