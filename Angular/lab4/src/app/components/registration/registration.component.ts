import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  validForm = false;
  validationForm = new FormGroup({
    name: new FormControl(null,[Validators.minLength(3)]),
    age: new FormControl(null, [Validators.min(20), Validators.max(40)]),
    email: new FormControl(null, [Validators.email])
  })

  get validateName() {
    return this.validationForm.controls["name"].valid;
  }

  get validateAge() {
    return this.validationForm.controls["age"].valid;
  }
  
  get validateEmail() {
    return this.validationForm.controls["email"].valid;
  }


  Add() {
    if (this.validationForm.valid) {
      this.validForm = true;
    }
}
}
