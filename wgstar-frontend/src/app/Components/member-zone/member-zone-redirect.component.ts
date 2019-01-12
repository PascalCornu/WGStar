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
  selector: 'app-member-zone-redirect',
  templateUrl: './member-zone.component.html',
  styleUrls: ['./member-zone.component.css']
})
export class MemberZoneRedirectComponent {
    constructor(private router: Router){
      this.router.navigateByUrl('/member')
    }
}
