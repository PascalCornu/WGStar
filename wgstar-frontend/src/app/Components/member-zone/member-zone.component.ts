import { Component, OnInit } from '@angular/core';
import {Person} from '../../share/model/person';
import {PersonLoginService} from '../../share/service/personLogin.service';
import {WgService} from '../../share/service/wg.service';
import {InvitationService} from '../../share/service/invitation.service';
import {Invitation} from '../../share/model/invitation';
import {Router} from '@angular/router';
import {Wg} from '../../share/model/wg';

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
  public invitations: Invitation[];
  public wgsOfUser: Wg[];

  constructor(private personLoginService: PersonLoginService,
              private wgService: WgService,
              private invitationService: InvitationService,
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
    )
  }

  accept(invitation: Invitation){
    invitation.done = true;
    this.invitationService.updateInvitation(invitation);
    console.log(invitation);
    invitation.invitingWg.personList.push(this.personLoginService.loginPerson);
    this.wgService.updateWg(invitation.invitingWg).subscribe(
      response => this.router.navigateByUrl('/member-redirect')
    );
  }

  decline(invitation: Invitation){
    invitation.done = true;
    this.invitationService.updateInvitation(invitation);
    this.router.navigateByUrl('/member-redirect');
  }
}
