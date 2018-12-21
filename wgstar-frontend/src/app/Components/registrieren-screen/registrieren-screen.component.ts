import { Component, OnInit } from '@angular/core';

import {FormControl, Validators} from '@angular/forms';
import {PersonService} from '../../share/service/person.service';
import {Person} from '../../share/model/person';

/**
 * Autor: Thierry Ehrsam
 * Version: 1.0
 * Datum: 06.11.2018
 * Komponente für die Registrierung
 */
@Component({
  selector: 'app-registrieren-screen',
  templateUrl: './registrieren-screen.component.html',
  styleUrls: ['./registrieren-screen.component.css']
})
export class RegistrierenScreenComponent {

  /**
   * Objekt für die Person, die erstellt werden soll
   */
  createPerson: Person = new Person();

  constructor(
    private personService: PersonService
  ) { }

  /**
   * FromControl für das Email-Feld
   */
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
  ]);

  /**
   * FromControl für das Nachname-Feld
   */
  lastnameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[^0-9]+$/),
  ]);

  /**
   * FromControl für das Vorname-Feld
   */
  firstnameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[^0-9]+$/),
  ]);

  /**
   * FromControl für das Passwort-Feld
   */
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/),
  ]);

  /**
   * speichert eine Person in die DB
   */
  savePerson(){
    this.personService.savePerson(this.createPerson)
      .subscribe();
  }
}
