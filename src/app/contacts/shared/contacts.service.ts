import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {HttpErrorResponse} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Contact} from '../shared/contact.model';

export class State {
  constructor(public name: string,
              public abbreviation: string){}
}

@Injectable()
export class ContactDataService {

  private usStates = [
    {name: 'ALABAMA', abbreviation: 'AL'},
    {name: 'ALASKA', abbreviation: 'AK'},
    {name: 'AMERICAN SAMOA', abbreviation: 'AS'},
    {name: 'ARIZONA', abbreviation: 'AZ'},
    {name: 'ARKANSAS', abbreviation: 'AR'},
    {name: 'CALIFORNIA', abbreviation: 'CA'},
    {name: 'COLORADO', abbreviation: 'CO'},
    {name: 'CONNECTICUT', abbreviation: 'CT'},
    {name: 'DELAWARE', abbreviation: 'DE'},
    {name: 'DISTRICT OF COLUMBIA', abbreviation: 'DC'},
    {name: 'FLORIDA', abbreviation: 'FL'},
    {name: 'GEORGIA', abbreviation: 'GA'},
    {name: 'GUAM', abbreviation: 'GU'},
    {name: 'HAWAII', abbreviation: 'HI'},
    {name: 'IDAHO', abbreviation: 'ID'},
    {name: 'ILLINOIS', abbreviation: 'IL'},
    {name: 'INDIANA', abbreviation: 'IN'},
    {name: 'IOWA', abbreviation: 'IA'},
    {name: 'KANSAS', abbreviation: 'KS'},
    {name: 'KENTUCKY', abbreviation: 'KY'},
    {name: 'LOUISIANA', abbreviation: 'LA'},
    {name: 'MAINE', abbreviation: 'ME'},
    {name: 'MARSHALL ISLANDS', abbreviation: 'MH'},
    {name: 'MARYLAND', abbreviation: 'MD'},
    {name: 'MASSACHUSETTS', abbreviation: 'MA'},
    {name: 'MICHIGAN', abbreviation: 'MI'},
    {name: 'MINNESOTA', abbreviation: 'MN'},
    {name: 'MISSISSIPPI', abbreviation: 'MS'},
    {name: 'MISSOURI', abbreviation: 'MO'},
    {name: 'MONTANA', abbreviation: 'MT'},
    {name: 'NEBRASKA', abbreviation: 'NE'},
    {name: 'NEVADA', abbreviation: 'NV'},
    {name: 'NEW HAMPSHIRE', abbreviation: 'NH'},
    {name: 'NEW JERSEY', abbreviation: 'NJ'},
    {name: 'NEW MEXICO', abbreviation: 'NM'},
    {name: 'NEW YORK', abbreviation: 'NY'},
    {name: 'NORTH CAROLINA', abbreviation: 'NC'},
    {name: 'NORTH DAKOTA', abbreviation: 'ND'},
    {name: 'OHIO', abbreviation: 'OH'},
    {name: 'OKLAHOMA', abbreviation: 'OK'},
    {name: 'OREGON', abbreviation: 'OR'},
    {name: 'PALAU', abbreviation: 'PW'},
    {name: 'PENNSYLVANIA', abbreviation: 'PA'},
    {name: 'PUERTO RICO', abbreviation: 'PR'},
    {name: 'RHODE ISLAND', abbreviation: 'RI'},
    {name: 'SOUTH CAROLINA', abbreviation: 'SC'},
    {name: 'SOUTH DAKOTA', abbreviation: 'SD'},
    {name: 'TENNESSEE', abbreviation: 'TN'},
    {name: 'TEXAS', abbreviation: 'TX'},
    {name: 'UTAH', abbreviation: 'UT'},
    {name: 'VERMONT', abbreviation: 'VT'},
    {name: 'VIRGIN ISLANDS', abbreviation: 'VI'},
    {name: 'VIRGINIA', abbreviation: 'VA'},
    {name: 'WASHINGTON', abbreviation: 'WA'},
    {name: 'WEST VIRGINIA', abbreviation: 'WV'},
    {name: 'WISCONSIN', abbreviation: 'WI'},
    {name: 'WYOMING', abbreviation: 'WY' }
  ];

  /**
   * Constructor
   * @param {Http} http
   */
  constructor(private http: Http) {}

  /**
   * Retrieve list of contacts
   * @returns {Observable<Contact[]>}
   */
  getContacts(): Observable<Contact[]> {
    return this.http.get('/api/contacts')
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  /**
   * Retrieve single contact
   * @param id
   * @returns {Observable<Contact>}
   */
  getContact(id): Observable<Contact> {
    return this.http.get(`/api/contact/${id}`)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  updateContact(id, body) {
    return this.http.put(`/api/contact/${id}`, body);
  }

  getStates(): Observable<State[]> {
    return Observable.of(this.usStates);
  }

  /**
   * Handle Http errors
   * @param error
   * @returns {ErrorObservable}
   */
  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText} - ${error.url}` : 'Server error';

    console.error('handleError', error); // log to console instead
    return Observable.throw(errMsg);
  }

}
