import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { User } from './user';

@Injectable()
export class FlaskService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private api = 'http://localhost:8000';  // URL to web api

  constructor(private http: Http) { }

  getUsers(): Observable<User[]> {
    let url = `${this.api}/api/v1/user`;
    return this.http
      .get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getUser(id?: number): Observable<User> {
    // If an id was provided, we should pull the detail on that user
    // Otherwise, get the full list
    let url = `${this.api}/api/v1/user/${id}`;

    return this.http
      .get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body.results);
    return body.results || { };
  }

  private handleError (error: any) {
      // In a real world app, we might use a remote logging infrastructure
      // We'd also dig deeper into the error to get a better message
      let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
      return Observable.throw(errMsg);
    }

}
