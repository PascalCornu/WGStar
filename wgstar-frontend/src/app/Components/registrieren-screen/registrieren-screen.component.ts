import { Component, OnInit } from '@angular/core';

import {FormControl, Validators} from '@angular/forms';
import {PersonService} from '../../share/service/person.service';
import {Person} from '../../share/model/person';

@Component({
  selector: 'app-registrieren-screen',
  templateUrl: './registrieren-screen.component.html',
  styleUrls: ['./registrieren-screen.component.css']
})
export class RegistrierenScreenComponent implements OnInit {

  creatPerson: Person;

  constructor(
    private personService: PersonService
  ) { }

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



  savePerson(){
    this.personService.savePerson(this.creatPerson)
      .subscribe();
  }
}
