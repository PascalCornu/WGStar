import {Injectable} from '@angular/core';
import {Person} from '../model/person';

@Injectable()
export class PersonLoginService {

  loginPerson: Person

  saveLoginPerson(person) {
    this.loginPerson = person
  }

  getloginPerson() {
    return this.loginPerson;
  }


}
