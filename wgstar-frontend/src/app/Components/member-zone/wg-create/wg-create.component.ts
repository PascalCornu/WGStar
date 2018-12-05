import {Component, OnInit} from '@angular/core';
import {Wg} from '../../../share/model/wg';
import {ActivatedRoute, Router} from '@angular/router';
import {WgService} from '../../../share/service/wg.service';
import {PersonService} from '../../../share/service/person.service';
import {Person} from '../../../share/model/person';

/*
 * Autor: Yves Stalder
 * Version: 1.0
 * Datum: 13.11.2018
 * Komponente für die Anzeige des WG-erstellen-screens
 */
@Component({
  selector: 'app-wg-crate-zone',
  templateUrl: './wg-create.component.html'
})
export class WgCreateComponent implements OnInit {

  /**
   * alle Personen
   */
  persons: Person[] = [];
  /**
   * Wg, in welche die Werte gespeichert werden
   */
  createWG: Wg = new Wg();

  constructor(private activateedRoute: ActivatedRoute,
              private router: Router,
              private wgService: WgService,
              private personService : PersonService) {

  }

  /**
   * holt alle Personen, um sie der WG zuzuweisen
   */
  ngOnInit() {
    this.getPersons();
  }

  /**
   * speichert eine WG im Backend
   */
  saveWg(){
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
