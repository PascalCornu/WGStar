import { Component, OnInit } from '@angular/core';
import {Person} from '../../share/model/person';
import {PersonLoginService} from '../../share/service/personLogin.service';

@Component({
  selector: 'app-member-zone',
  templateUrl: './member-zone.component.html',
  styleUrls: ['./member-zone.component.css']
})
export class MemberZoneComponent implements OnInit {

  private personLogin: Person;

  constructor(private personLoginService: PersonLoginService) { }

  ngOnInit() {
    debugger
    this.personLogin = this.personLoginService.getloginPerson();
    console.log(this.personLogin);
  }

  logout(){
    localStorage.setItem('isMember', 'false');
    window.location.reload();
  }
}
