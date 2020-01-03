import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { IProductCategory, IProduct } from '../../../interfaces/product';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit, OnDestroy {
  productForm: FormGroup;
  categories: IProductCategory[];
  categorySubscription: Subscription;
  subscriptions: Subscription[] = [];
  id: string;

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id; {
      if (this.id) {
        this.populateForm(this.id);
      }
    }
    this.subscriptions.push(
      this.productsService.getProductCategories()
        .subscribe(res => {
          this.categories = res;
          console.log(res);
        })
    );

    this.productForm = new FormGroup({
      title: new FormControl('', Validators.required),
      price: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      category: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required),
    });
  }

  populateForm(id: string) {
    this.subscriptions.push(
      this.productsService.getProductById(id)
      .subscribe((product: IProduct) => {
        this.productForm.controls.title.setValue(product.title);
        this.productForm.controls.price.setValue(product.price);
        this.productForm.controls.category.setValue(product.category);
        this.productForm.controls.imageUrl.setValue(product.imageUrl);
      })
    )
  }

  submitForm(form) {
    const body: IProduct = this.productForm.value;
    if (this.id) {
      this.productsService.updateProduct(this.id, body).then(() => {
        this.router.navigate(['admin/manage-products']);
      })
    } else {
      this.productsService.createProduct(body).then(() => {
        this.router.navigate(['admin/manage-products']);
      })
    }

  }

  ngOnDestroy() {
    this.subscriptions.map(subs => subs.unsubscribe());
  }

}
