import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {HandleError, HttpErrorHandler} from './http-error-handler.service';
import {Person} from '../model/person';
import {apiEndpoints} from '../api-endpoints';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs/internal/Observable';
import {Wg} from '../model/wg';
import {Invitation} from '../model/invitation';
import {PersonService} from './person.service';
import {PersonLoginService} from './personLogin.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class InvitationService {

  private handleError: HandleError;

  constructor(private http: HttpClient,
              private httpErrorHandler: HttpErrorHandler,
              private personLoginService: PersonLoginService) {
    this.handleError = httpErrorHandler.createHandleError('Invitation');
  }

  saveInvitation(invitation: Invitation) {
    return this.http
      .post<Invitation>(apiEndpoints.saveInvitation, JSON.stringify(invitation), httpOptions)
      .pipe(
        catchError(this.handleError('Invitation', invitation))
      );
  }

  getInvitations(): Observable<Invitation[]> {
      return this.http.get<Invitation[]>(apiEndpoints.getInvitations + this.personLoginService.loginPerson.id.toString());
  }

  updateInvitation(invitation: Invitation) {
      return this.http.put<Invitation>(apiEndpoints.updateInvitation, JSON.stringify(invitation))
        .pipe(
          catchError(this.handleError('Invitation', invitation))
        );
  }

}
