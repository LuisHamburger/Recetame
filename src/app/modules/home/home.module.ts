import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../../shared/shared.module';
import { RandomComponent } from './pages/random/random.component';
import { ByLevelComponent } from './pages/by-level/by-level.component';

@NgModule({
  declarations: [
    HomeComponent,
    RandomComponent,
    ByLevelComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
