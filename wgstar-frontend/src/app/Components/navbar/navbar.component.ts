import { Component, OnInit } from '@angular/core';
import {PersonLoginService} from '../../share/service/personLogin.service';
import {Person} from '../../share/model/person';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public personLoginService: PersonLoginService, private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.personLoginService.loginPerson = new Person();
    this.router.navigateByUrl('/login');
  }
}
