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

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  nameFormControl = new FormControl('', [
    Validators.required,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);

  passwordRepeatControl = new FormControl( '', [
    Validators.required,
  ])

}
