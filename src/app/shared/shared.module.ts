import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { IndividualPostComponent } from './components/individual-post/individual-post.component';



@NgModule({
  declarations: [
    NavbarComponent,
    IndividualPostComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    IndividualPostComponent
  ]
})
export class SharedModule { }
