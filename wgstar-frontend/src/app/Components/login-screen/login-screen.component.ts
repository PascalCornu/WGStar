import {Component, OnInit} from '@angular/core';
import {PersonService} from '../../share/service/person.service';
import {Person} from '../../share/model/person';
import {AppComponent} from '../../app.component';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {PersonLoginService} from '../../share/service/personLogin.service';


@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  person: Person;
  loginPerson: Person = new Person();
  persons: Person[] = []

  constructor(
    private personService: PersonService,
    private personLoginService: PersonLoginService,
    public snackBar: MatSnackBar,
    private router: Router,
  ) {
    this.getPersons();
  }

  ngOnInit() {

  }


  public checkLogin() {
    let loginSuccess = false;
    console.log(this.loginPerson)
    for (this.person of this.persons) {
      if (this.person.email == this.loginPerson.email) {
        if (this.person.password == this.loginPerson.password) {
          debugger
          this.personLoginService.saveLoginPerson(this.person);
          loginSuccess = true;
        }
      }
    }
   if(loginSuccess){
     localStorage.setItem('isMember','true');

     this.snackBar.open('erfolgreich eingeloggt', '', {
       duration: 2000,
     });
     window.location.reload();
   } else{
     this.snackBar.open('Password oder Email stimmen nicht überein', '', {
       duration: 2000,
     });
   }
  }


  public getPersons() {
    this.personService
      .getPersons()
      .subscribe(persons => {
        this.persons = persons;
      });
  }

  // TODO: isMember in appComponent.ts auf true setzen und member-nav aktivieren


}
