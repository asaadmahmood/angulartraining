import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct } from 'src/app/interfaces/product';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss']
})
export class ManageProductsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  products: IProduct[];

  constructor(
    private productsService: ProductsService,
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  ngOnDestroy() {
    this.subscriptions.map(x => x.unsubscribe());
  }

  getProducts() {
    this.subscriptions.push(
      this.productsService.getProducts()
        .subscribe(res => {
          this.products = res;
        })
    );
  }

  removeProduct(product: IProduct) {
    this.productsService.removeProduct(product).then(() => {
      console.log('removed');
    })
  }

}
