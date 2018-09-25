import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PersonService} from '../../share/service/person.service';
import {Person} from '../../share/model/person';

interface NavItem {
  displayName: string;
  routerLink: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {


  persons: Person[] = [];

  public navItems: Array<NavItem> = [
    {displayName: 'Home', routerLink: 'home'},
    {displayName: 'Projektübersicht', routerLink: 'project-board'},
    {displayName: 'Test erfassen', routerLink: 'capture-test'},
    {displayName: 'Informationen', routerLink: 'info'}
  ];
  constructor(private activateedRoute: ActivatedRoute,
              private router: Router,
              private personService: PersonService) { }

  ngOnInit() {
    this.getPersons()
  }

  public getPersons() {
    this.personService
      .getPersons()
      .subscribe(persons => {
        this.persons = persons;
      });
  }

}
