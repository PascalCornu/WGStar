import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {HandleError, HttpErrorHandler} from './http-error-handler.service';
import {Person} from '../model/person';
import {apiEndpoints} from '../api-endpoints';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs/internal/Observable';
import {Wg} from '../model/wg';

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
 * Datum: 16.10.2018
 * Service für Personen
 */
@Injectable()
export class PersonService {

  loginPerson: Person;

  /**
   * Typ der HandleError Methode
   */
  private handleError: HandleError;

  /**
   * erstellt ein ErrorHandler für die Person
   */
  constructor(private http: HttpClient,
              private httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('Person');
  }


  /**
   * Liefert alle Personen zurück
   */
  getPersons(): Observable<Person[]> {
    return this.http
      .get<Person[]>(apiEndpoints.getPersons)
      .pipe(
        catchError(this.handleError('getPersons', []))
      );
  }

  /**
   * Speichert alle Personen
   */
  savePerson(person: Person) {
    return this.http
      .post<Wg>(apiEndpoints.savePerson, JSON.stringify(person), httpOptions)
      .pipe(
        catchError(this.handleError('savePerson', person))
      );
  }

  /**
   * Holt eine Person anhand der ID
   */
  getPersonsById(): Observable<Person[]> {
    return this.http
      .get<Person[]>(apiEndpoints.getPersons)
      .pipe(
        catchError(this.handleError('getPersons', []))
      );
  }


}
