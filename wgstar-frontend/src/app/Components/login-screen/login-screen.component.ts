import { Component, OnInit } from '@angular/core';
import {PersonService} from '../../share/service/person.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Person} from '../../share/model/person';



@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  persons: Person[] = [];

  constructor(private activateedRoute: ActivatedRoute,
              private router: Router,
              private personService: PersonService) { }

  ngOnInit() {
    this.getPersons();
  }

  public getPersons() {
    this.personService
      .getPersons()
      .subscribe(persons => {
        this.persons = persons;
      });
  }

}
