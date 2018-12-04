import {Injectable} from '@angular/core';
import {Person} from '../model/person';

@Injectable()
export class PersonLoginService {

  loginPerson: Person

  saveLoginPerson(person) {
    debugger
    this.loginPerson = person
  }

  getloginPerson() {
    debugger
    return this.loginPerson;
  }


}
