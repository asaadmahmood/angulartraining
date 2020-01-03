import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;
  constructor() { }

  ngOnInit() {
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

  submitForm(form) {
    console.log(form.controls);
    if (form.valid) {
      form.reset();
      console.log('Form submitted successfully');
    } else {
      console.log('Form is invalid');
    }
  }

}
