import {Component, OnInit} from '@angular/core';
import {Wg} from '../../../share/model/wg';
import {ActivatedRoute, Router} from '@angular/router';
import {WgService} from '../../../share/service/wg.service';
import {PersonService} from '../../../share/service/person.service';
import {Person} from '../../../share/model/person';
import {PersonLoginService} from '../../../share/service/personLogin.service';
import {MatSnackBar} from '@angular/material';
import {InvitationService} from '../../../share/service/invitation.service';
import {Invitation} from '../../../share/model/invitation';

/*
 * Autor: Yves Stalder
 * Version: 1.0
 * Datum: 13.11.2018
 * Komponente für die Anzeige des WG-erstellen-screens
 */
@Component({
  selector: 'app-wg-crate-zone',
  templateUrl: './wg-create.component.html',
  styleUrls: ['./wg-create.component.css']
})
export class WgCreateComponent implements OnInit {

  /**
   * alle Personen
   */
  persons: Person[] = [];

  selectedPerson: Person = {};

  /**
   * Wg, in welche die Werte gespeichert werden
   */
  createWG: Wg = new Wg();

  constructor(private activateedRoute: ActivatedRoute,
              private router: Router,
              private wgService: WgService,
              private personService : PersonService,
              private invitationService : InvitationService,
              public snackBar: MatSnackBar,
              private personLoginService: PersonLoginService) {

  }

  /**
   * holt alle Personen, um sie der WG zuzuweisen
   */
  ngOnInit() {
    this.createWG.personList = [];
    this.createWG.owner = this.personLoginService.loginPerson;
    this.getPersons();
  }

  /**
   * speichert eine WG im Backend
   */
  saveWg(){
    this.wgService.saveWg(this.createWG)
    .subscribe(
      savedWg => {
        this.createWG = savedWg;
        if(this.selectedPerson.id !== null){
          let invitation = new Invitation();
          invitation.invitedPerson = this.selectedPerson;
          invitation.invitingWg = this.createWG;
          invitation.done = false;
          this.invitationService.saveInvitation(invitation).subscribe();
        }
        this.snackBar.open('Wg erstellt', '', {
          duration: 2000,
        });
        this.router.navigateByUrl('/member');
      }
    );
  }

  /**
   * hole alle Personen
   */
  getPersons(){
    this.personService
      .getPersons()
      .subscribe(persons => {
        this.persons = persons;
      } );
  }
}
