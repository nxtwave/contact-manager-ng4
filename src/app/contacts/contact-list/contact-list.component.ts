import { Component, OnInit } from '@angular/core';
import {ContactDataService} from '../shared/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  /**
   * Contacts
   * @type {Array}
   */
  contacts: any[] = [];

  /**
   * Error
   */
  error: any;

  /**
   * Constructor
   * @param {DataService} dataService
   */
  constructor(private dataService: ContactDataService) {}

  /**
   * Initialize
   */
  ngOnInit() {
    this.dataService.getContacts()
      .subscribe(
        contacts => this.contacts = contacts,
        error => this.error = <any>error);
  }

}
