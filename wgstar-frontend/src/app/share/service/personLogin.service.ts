import {Injectable} from '@angular/core';
import {Person} from '../model/person';

/**
 * Autor: Yves Stalder
 * Version: 1.0
 * Datum: 16.10.2018
 * Service für die eingeloggte Person
 */
@Injectable({
  providedIn: 'root',
})
export class PersonLoginService {

  /**
   * Person, die eingeloggt ist
   */
  loginPerson: Person = {};

  /**
   * weist eine eingeloggte Person dem Service zu
   */
  saveLoginPerson(person) {
    this.loginPerson = person
  }

  /**
   * liefert die eingeloggte Person zurück
   */
  getloginPerson() {
    return this.loginPerson;
  }

  isLoggedIn() : boolean {
    return this.loginPerson.id != null;
  }
}
