import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PersonService} from '../../share/service/person.service';

interface NavItem {
  displayName: string;
  routerLink: string;
}

@Component({
  selector: 'app-nav-member',
  templateUrl: './nav-member.component.html',
  styleUrls: ['./nav-member.component.scss']
})
export class NavMemberComponent implements OnInit {

  constructor(private activateedRoute: ActivatedRoute,
              private router: Router,
              private personService: PersonService) { }

  ngOnInit() {
    this.router.navigate(['/member']);
  }

  public navItems: Array<NavItem> = [
    {displayName: 'Member Zone', routerLink: 'member'},
    {displayName: 'WG erstellen', routerLink: 'createwg'},
  ];
}
