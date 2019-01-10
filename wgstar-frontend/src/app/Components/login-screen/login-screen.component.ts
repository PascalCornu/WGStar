import {Component, OnInit} from '@angular/core';
import {PersonService} from '../../share/service/person.service';
import {Person} from '../../share/model/person';
import {MatSnackBar} from '@angular/material';
import {PersonLoginService} from '../../share/service/personLogin.service';
import {Router} from '@angular/router';

/**
 * Autor: Pascal Cornu
 * Version: 1.0
 * Datum: 13.11.2018
 * Komponente für die Anzeige des LoginScreens
 */

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  /**
   * Person, welche sich einloggen will
   */
  loginPerson: Person = new Person();
  /**
   * alle Personen, welche es gibt
   */
  persons: Person[] = [];

  constructor(
    private personService: PersonService,
    private personLoginService: PersonLoginService,
    public snackBar: MatSnackBar,
    public router: Router
  ) {
  }

  /**
   * holt alle Personen
   */
  ngOnInit() {
    this.getPersons();
  }

  /**
   * überprüft die Logindaten, ob sie korrekt sind
   */
  public checkLogin() {
    let loginSuccess = false;
    for (let person of this.persons) {
      if (person.email == this.loginPerson.email) {
        if (person.password == this.loginPerson.password) {
          this.personLoginService.saveLoginPerson(person);
          loginSuccess = true;
        }
      }
    }
   if(loginSuccess){
     localStorage.setItem('isMember','true');

     this.snackBar.open('erfolgreich eingeloggt', '', {
       duration: 2000,
     });

     this.router.navigateByUrl('/member');
   } else{
     this.snackBar.open('Password oder Email stimmen nicht überein', '', {
       duration: 2000,
     });
   }
  }

  /**
   * holt alle Personen aus dem Backend
   */
  public getPersons() {
    this.personService
      .getPersons()
      .subscribe(persons => {
        this.persons = persons;
      });
  }

  // TODO: isMember in appComponent.ts auf true setzen und member-nav aktivieren


}
