import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {HandleError, HttpErrorHandler} from './http-error-handler.service';
import {Person} from '../model/person';
import {apiEndpoints} from '../api-endpoints';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs/internal/Observable';
import {Wg} from '../model/wg';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable()
export class PersonService {
  private handleError: HandleError;

  constructor(private http: HttpClient,
              private httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('Person');
  }


  getPersons(): Observable<Person[]> {
    return this.http
      .get<Person[]>(apiEndpoints.getPersons)
      .pipe(
        catchError(this.handleError('getPersons', []))
      );
  }

  savePerson(person: Person) {
    return this.http
      .post<Wg>(apiEndpoints.savePerson, JSON.stringify(person), httpOptions)
      .pipe(
        catchError(this.handleError('savePerson', person))
      );
  }

  getPersonsById(): Observable<Person[]> {
    return this.http
      .get<Person[]>(apiEndpoints.getPersons)
      .pipe(
        catchError(this.handleError('getPersons', []))
      );
  }


}
