import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedComponent } from './pages/red/red.component';
import { SharedModule } from '../../shared/shared.module';
import { RedRoutingModule } from './red-routing.module';
import { UploadPostComponent } from './pages/upload-post/upload-post.component';

@NgModule({
  declarations: [
    RedComponent,
    UploadPostComponent,  ],
  imports: [
    CommonModule,
    RedRoutingModule,
    SharedModule
  ]
})
export class RedModule { }
