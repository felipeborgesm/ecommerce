import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit, OnDestroy {
  @Output() showCategory = new EventEmitter<string>();

  categories: string[] | undefined

  categoriesSubscription: Subscription | undefined

  constructor(private storeService: StoreService) { }


  ngOnInit(): void {
    this.categoriesSubscription =
      this.storeService.getAllCategories()
        .subscribe((response) => {
          this.categories = response
        })
  }

  onShowCategory(category: string): void {
    this.showCategory.next(category)
  }

  ngOnDestroy(): void {
    if (this.categoriesSubscription) {
      this.categoriesSubscription.unsubscribe()
    }
  }
}
