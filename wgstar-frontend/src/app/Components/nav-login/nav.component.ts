import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PersonService} from '../../share/service/person.service';
import {Person} from '../../share/model/person';

/**
 * Interface für die Typisierung
 */
interface NavItem {
  displayName: string;
  routerLink: string;
}

/**
 * Autor: Yves Stalder
 * Version: 1.0
 * Datum: 16.10.2018
 * Komponente zur Anzeige der Navigation
 */
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  /**
   * alle Personen
   */
  persons: Person[] = [];

  /**
   * Items der Navigation
   */
  public navItems: Array<NavItem> = [
    {displayName: 'Login', routerLink: 'login'},
    {displayName: 'Registrieren', routerLink: 'registrieren'},
  ];

  constructor(private activateedRoute: ActivatedRoute,
              private router: Router,
              private personService: PersonService) { }

  /**
   * navigiert zur Login seite, wenn die Navigation zum ersten Mal erstellt wird und holt alle Personen
   */
  ngOnInit() {
    this.router.navigate(['/login']);
    this.getPersons();
  }

  /**
   * holt alle personen
   */
  public getPersons() {
    this.personService
      .getPersons()
      .subscribe(persons => {
        this.persons = persons;
      });
  }

}
