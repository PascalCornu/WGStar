import { Component, OnInit } from '@angular/core';
import {PersonService} from '../../share/service/person.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Person} from '../../share/model/person';



@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {



  constructor() { }

  ngOnInit() {
  }



}
