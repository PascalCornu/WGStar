import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Wg} from '../../../share/model/wg';
import {ActivatedRoute, Router} from '@angular/router';
import {WgService} from '../../../share/service/wg.service';
import {PersonService} from '../../../share/service/person.service';
import {Person} from '../../../share/model/person';

@Component({
  selector: 'app-wg-crate-zone',
  templateUrl: './wg-create.component.html',
  styleUrls: ['./wg-create.component.css']
})
export class WgCreateComponent implements OnInit {

  persons: Person[] = [];
  createWG: Wg = new Wg();

  constructor(private activateedRoute: ActivatedRoute,
              private router: Router,
              private wgService: WgService,
              private personService : PersonService) {

  }

  ngOnInit() {
    this.getPersons();
  }

  saveWg(){
    this.wgService.saveWg(this.createWG)
    .subscribe();
  }


  getPersons(){
    this.personService
      .getPersons()
      .subscribe(persons => {
        this.persons = persons;
      } );
  }
}
