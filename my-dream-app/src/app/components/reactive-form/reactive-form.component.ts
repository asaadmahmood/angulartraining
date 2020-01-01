import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidatorService } from 'src/app/services/custom-validator.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  myForm: FormGroup;
  cities = [
    {id: 1, name: 'Karachi'},
    {id: 2, name: 'Islamabad'},
    {id: 3, name: 'Lahore'},
  ]

  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({
      firstName: new FormControl('Asaad', Validators.required),
      lastName: new FormControl('Mahmood', [
        Validators.required,
        Validators.minLength(3),
        CustomValidatorService.canNotContainSpace,
      ]),
      gender: new FormControl('Select Gender'),
      subscribeToNewsLetter: new FormControl(),
      city: new FormControl({},),
    });
  }

  formSubmit() {
    console.log(this.myForm);
    console.log('Submitted');
    console.log(this.myForm.value);
  }



}
