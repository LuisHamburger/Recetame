import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  ingredients: string[] = [];
  ingredientToAdd = '';

  addIngredient(): void {
    const ingredient = this.ingredientToAdd.trim();
    if (ingredient && !this.ingredients.includes(ingredient)) {
      this.ingredients.push(this.ingredientToAdd);
    }
    this.ingredientToAdd = '';
  }

  removeIngredient(ingredient: string): void {
    this.ingredients = this.ingredients.filter(value => value !== ingredient);
  }
}
