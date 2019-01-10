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

/**
 * Http-Optionen, die bei einem Call an Backend übergeben werden.
 */
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

/**
 * Autor: Yves Stalder
 * Version: 1.0
 * Datum: 06.11.2018
 * Service für die WG
 */
@Injectable()
export class WgService {
  /**
   * Typ der HandleError Methode
   */
  private handleError: HandleError;

  /**
   * erstellt ein ErrorHandler für die WG
   */
  constructor(private http: HttpClient,
              private httpErrorHandler: HttpErrorHandler,
              private personLoginService: PersonLoginService) {
    this.handleError = httpErrorHandler.createHandleError('Wg');
  }

  /**
   * speichert eine WG
   */
  saveWg(wg: Wg) {
    return this.http
      .post<Wg>(apiEndpoints.saveWg, JSON.stringify(wg), httpOptions)
      .pipe(
        catchError(this.handleError('saveWg', wg))
      );
  }

  getWgs(): Observable<Wg> {
    return this.http.get<Wg>(apiEndpoints.getWgByPersonId + this.personLoginService.loginPerson.id.toString());
  }

}
