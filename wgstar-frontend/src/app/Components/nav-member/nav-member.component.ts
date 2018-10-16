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
  styleUrls: ['./nav-member.component.css']
})
export class NavMemberComponent implements OnInit {

  constructor(private activateedRoute: ActivatedRoute,
              private router: Router,
              private personService: PersonService) { }

  ngOnInit() {
  }

  public navItems: Array<NavItem> = [
    {displayName: 'Member Zone', routerLink: 'member'},
  ];
}
