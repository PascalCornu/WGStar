import { Component, OnInit } from '@angular/core';

import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-registrieren-screen',
  templateUrl: './registrieren-screen.component.html',
  styleUrls: ['./registrieren-screen.component.css']
})
export class RegistrierenScreenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  samePassword(password: string, passwordRepeat: string): boolean {
    if (password === passwordRepeat){
      return true;
    }
    return false;
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
  ]);

  lastnameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[^0-9]+$/),
  ]);

  firstnameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[^0-9]+$/),
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/),
  ]);

  passwordRepeatFormControl = new FormControl( '', [
    Validators.required,
  ]);

}
