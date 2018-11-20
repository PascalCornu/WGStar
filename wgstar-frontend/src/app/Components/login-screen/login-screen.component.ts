import { Component, OnInit } from '@angular/core';
import {PersonService} from "../../share/service/person.service";
import {Person} from "../../share/model/person";
import {AppComponent}from "../../app.component";



@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  person: Person;
  loginPerson: Person;
  persons: Person[] = []
  constructor(
              private personService: PersonService
  ) { }

  ngOnInit() {
    this.getPersons();
  }


  public checkLogin() {
    let loginSuccess = false;
    for (this.person of this.persons) {
      if(this.person.email == this.loginPerson.email) {
        if (this.person.password == this.loginPerson.password) {
          AppComponent.prototype.isMember = true;
          loginSuccess = true;
        }
      }
    }
    loginSuccess && window.alert("Die eingegebenen Daten sind falsch")
  }


  public getPersons() {
    this.personService
      .getPersons()
      .subscribe(persons => {
        this.persons = persons;
      });
  }
  // TODO: isMember in appComponent.ts auf true setzen und member-nav aktivieren


}
