import { Component } from '@angular/core';


interface Filter {
  title: string;
  options: string[];
}


@Component({
  selector: 'app-filter-options',
  templateUrl: './filter-options.component.html',
})
export class FilterOptionsComponent {

  private readonly filters: Filter[] = [
    {
     title: "Dificultad",
     options: ["Principiante", "Intermedio", "Experto"]
    }
  ]

  getFilters() {
    return [...this.filters];
  }
}
