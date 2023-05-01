import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { BasicDataComponent } from './pages/basic-data/basic-data.component';
import { FavoriteRecipeComponent } from './pages/favorite-recipe/favorite-recipe.component';



@NgModule({
  declarations: [
    ProfileComponent,
    BasicDataComponent,
    FavoriteRecipeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
