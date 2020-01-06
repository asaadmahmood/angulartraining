import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProductCategory, IProduct } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: IProduct[];
  categories: IProductCategory[];
  categorySubscription: Subscription;
  subscriptions: Subscription[] = [];

  constructor(
    private productsService: ProductsService,
  ) { }

  ngOnInit() {
    this.subscriptions.push(
      this.productsService.getProductCategories()
        .subscribe(res => {
          const category: IProductCategory = {
            id: '0',
            name: 'All Categories',
            isActive: true,
          }
          this.categories = [category, ...res];
        })
    );

    this.subscriptions.push(
      this.productsService.getProducts()
        .subscribe(res => {
          this.products = res;
        })
    );
  }

  ngOnDestroy() {
    this.subscriptions.map(subs => subs.unsubscribe());
  }

  filterProducts(category: IProductCategory) {
    this.categories.map(x => x.isActive = false);
    category.isActive = true;
  }

}
