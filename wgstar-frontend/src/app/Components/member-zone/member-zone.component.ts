import { Component, OnInit } from '@angular/core';
import {Person} from '../../share/model/person';
import {PersonLoginService} from '../../share/service/personLogin.service';
import {PersonService} from '../../share/service/person.service';

/**
 * Autor: Yves Stalder
 * Version: 1.0
 * Datum: 23.11.2018
 * Komponente für den Member-Bereich
 */
@Component({
  selector: 'app-member-zone',
  templateUrl: './member-zone.component.html'
})
export class MemberZoneComponent implements OnInit {

  /**
   * die eingeloggte Person
   */
  private personLogin: Person;

  constructor(private personLoginService: PersonLoginService, private personService: PersonService) { }

  /**
   * holt die eingeloggte Person aus dem Service
   */
  ngOnInit() {
    this.personLogin = this.personLoginService.getloginPerson();
    this.personService.loginPerson = this.personLogin
  }

  /**
   * logout
   */
  logout(){
    localStorage.setItem('isMember', 'false');
    window.location.reload();
  }
}
