import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorService {

  constructor() { }

  static canNotContainSpace(control: AbstractControl) {
    if (control.value && control.value.indexOf(' ') > -1) {
      return { containsSpace: true };
    }
    return null;
  }
}
