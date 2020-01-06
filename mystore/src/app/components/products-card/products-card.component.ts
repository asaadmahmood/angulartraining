import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.scss']
})
export class ProductsCardComponent implements OnInit {
  @Input() product;
  quantity = 0;

  constructor() { }

  ngOnInit() {
  }

  addProduct() {
    this.quantity++;
  }

  removeProduct() {
    this.quantity--;
  }

}
