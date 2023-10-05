import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  categories = ['shoes', 'sports'];
  @Output() showCategory = new EventEmitter<string>();

  onShowCategory(category: string): void {
    this.showCategory.emit(category)
  }
}
