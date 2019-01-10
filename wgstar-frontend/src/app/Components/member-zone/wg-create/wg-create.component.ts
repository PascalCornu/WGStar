import {Component, OnInit} from '@angular/core';
import {Wg} from '../../../share/model/wg';
import {ActivatedRoute, Router} from '@angular/router';
import {WgService} from '../../../share/service/wg.service';
import {PersonService} from '../../../share/service/person.service';
import {Person} from '../../../share/model/person';
import {PersonLoginService} from '../../../share/service/personLogin.service';

/*
 * Autor: Yves Stalder
 * Version: 1.0
 * Datum: 13.11.2018
 * Komponente für die Anzeige des WG-erstellen-screens
 */
@Component({
  selector: 'app-wg-crate-zone',
  templateUrl: './wg-create.component.html',
  styleUrls: ['./wg-create.component.css']
})
export class WgCreateComponent implements OnInit {

  /**
   * alle Personen
   */
  persons: Person[] = [];

  selectedPerson: Person = {};

  /**
   * Wg, in welche die Werte gespeichert werden
   */
  createWG: Wg = new Wg();

  constructor(private activateedRoute: ActivatedRoute,
              private router: Router,
              private wgService: WgService,
              private personService : PersonService,
              private personLoginService: PersonLoginService) {

  }

  /**
   * holt alle Personen, um sie der WG zuzuweisen
   */
  ngOnInit() {
    this.createWG.personList = [];
    this.createWG.owner = this.personLoginService.loginPerson;
    this.getPersons();
  }

  /**
   * speichert eine WG im Backend
   */
  saveWg(){
    this.createWG.personList.push(this.selectedPerson);
    console.log(this.createWG);
    this.wgService.saveWg(this.createWG)
    .subscribe();
  }

  /**
   * hole alle Personen
   */
  getPersons(){
    this.personService
      .getPersons()
      .subscribe(persons => {
        this.persons = persons;
      } );
  }
}
