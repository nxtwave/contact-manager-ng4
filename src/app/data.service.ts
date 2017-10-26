import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {

  /**
   * Constructor
   * @param {Http} http
   */
  constructor(private http: Http) {}

  /**
   * Retrieve list of contacts
   * @returns {Observable<any[]>}
   */
  getContacts(): Observable<any[]> {
    return this.http.get('/api/contacts')
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  /**
   * Retrieve single contact
   * @param id
   * @returns {Observable<any>}
   */
  getContact(id): Observable<any> {
    return this.http.get(`/api/contact/${id}`)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  updateContact(id, body) {
    return this.http.put(`/api/contact/${id}`, body);
  }

  /**
   * Handle data retrieval errors
   * @param error
   * @returns {ErrorObservable}
   */
  handleError(error: any) {
    console.error('data.service.error', error);
    return Observable.throw(error.json().error || 'Server Error');
  }

}
