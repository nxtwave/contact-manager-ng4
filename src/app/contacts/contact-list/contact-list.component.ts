import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {ContactDataService} from '../shared/contacts.service';
import {Contact} from '../shared/contact.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  /**
   * Contact List
   */
  contacts: Observable<Contact[]>
;
  /**
   * Error message from data service
   */
  error: any;

  /**
   * Constructor
   * @param {DataService} dataService
   */
  constructor(private dataService: ContactDataService) {}

  /**
   * Initialize component, retrieve data
   */
  ngOnInit() {
    this.contacts = this.dataService.getContacts();
  }

}
