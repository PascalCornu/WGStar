import { Component, OnInit } from '@angular/core';
import {Person} from '../../share/model/person';
import {PersonLoginService} from '../../share/service/personLogin.service';
import {WgService} from '../../share/service/wg.service';
import {InvitationService} from '../../share/service/invitation.service';
import {Invitation} from '../../share/model/invitation';
import {Router} from '@angular/router';
import {Wg} from '../../share/model/wg';
import {PersonService} from '../../share/service/person.service';
import {MatSnackBar} from '@angular/material';

/**
 * Autor: Yves Stalder
 * Version: 1.0
 * Datum: 23.11.2018
 * Komponente für den Member-Bereich
 */
@Component({
  selector: 'app-member-zone',
  templateUrl: './member-zone.component.html',
  styleUrls: ['./member-zone.component.css']
})
export class MemberZoneComponent implements OnInit {

  /**
   * die eingeloggte Person
   */
  private personLogin: Person;
  public invitations: Invitation[] = [];
  public wgsOfUser: Wg[] = [];

  persons: Person[] = [];

  selectedPerson: Person = {};

  constructor(public personLoginService: PersonLoginService,
              private wgService: WgService,
              private invitationService: InvitationService,
              private personService: PersonService,
              private snackBar: MatSnackBar,
              private router: Router) { }

  /**
   * holt die eingeloggte Person aus dem Service
   */
  ngOnInit() {
    this.personLogin = this.personLoginService.getloginPerson();
    this.invitationService.getInvitations().subscribe(
      invitations => {
        this.invitations = invitations;
      }
    );
    this.wgService.getWgs().subscribe(
      wgsOfUser => this.wgsOfUser = wgsOfUser
    );

    this.getPersons();
  }

  public accept(invitation: Invitation){
    invitation.done = true;
    this.invitationService.updateInvitation(invitation).subscribe();
    invitation.invitingWg.personList.push(this.personLoginService.loginPerson);
    this.wgService.updateWg(invitation.invitingWg).subscribe(
      response => this.router.navigateByUrl('/member-redirect')
    );
  }

  public decline(invitation: Invitation){
    invitation.done = true;
    this.invitationService.updateInvitation(invitation).subscribe();
    this.router.navigateByUrl('/member-redirect');
  }

  getPersons(){
    this.personService
      .getPersons()
      .subscribe(persons => {
        persons.forEach(person =>{
          if (person.id != this.personLoginService.loginPerson.id){
            this.persons.push(person);
          }
        })
        /*this.persons = persons;*/
      } );
  }

  public invite(wg: Wg){
    if(this.selectedPerson.id !== null){
      let invitation = new Invitation();
      invitation.invitedPerson = this.selectedPerson;
      invitation.invitingWg = wg;
      invitation.done = false;
      this.invitationService.saveInvitation(invitation).subscribe();
    }
    this.snackBar.open('Person eingeladen', '', {
      duration: 2000,
    });
    this.router.navigateByUrl('/member-redirect');
  }
}
