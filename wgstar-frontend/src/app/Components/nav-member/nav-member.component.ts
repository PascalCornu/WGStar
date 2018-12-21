import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PersonService} from '../../share/service/person.service';

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
  selector: 'app-nav-member',
  templateUrl: './nav-member.component.html',
  styleUrls: ['./nav-member.component.scss']
})
export class NavMemberComponent implements OnInit {

  constructor(private activateedRoute: ActivatedRoute,
              private router: Router,
              private personService: PersonService) { }

  /**
   * beim ersten Aufruf soll auf den Member-Bereich navigiert werden.
   */
  ngOnInit() {
    this.router.navigate(['/member']);
  }

  /**
   * Die Navigationspunkte
   */
  public navItems: Array<NavItem> = [
    {displayName: 'Member Zone', routerLink: 'member'},
    {displayName: 'WG erstellen', routerLink: 'createwg'},
  ];
}
