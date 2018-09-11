import { Component, OnInit } from '@angular/core';

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

  public navItems: Array<NavItem> = [
    {displayName: 'Home', routerLink: 'home'},
    {displayName: 'Projektübersicht', routerLink: 'project-board'},
    {displayName: 'Test erfassen', routerLink: 'capture-test'},
    {displayName: 'Informationen', routerLink: 'info'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
