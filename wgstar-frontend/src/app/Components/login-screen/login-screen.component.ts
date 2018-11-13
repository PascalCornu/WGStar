import { Component, OnInit } from '@angular/core';
import {PersonService} from "../../share/service/person.service";
import {Person} from "../../share/model/person";



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
    for (person in this.persons) {
      if(person.)
    }
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
