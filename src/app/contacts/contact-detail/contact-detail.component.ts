import {Component, OnInit, HostBinding} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import {DataService} from '../../data.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  /**
   * Contact to view/edit
   */
  contact$: Observable<any>;

  /**
   * Constructor
   * @param {ActivatedRoute} route
   * @param {Router} router
   * @param {DataService} dataService
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}

  /**
   * Initialize
   */
  ngOnInit() {
    this.contact$ = this.route.paramMap
      .switchMap((params: ParamMap) => this.dataService.getContact(params.get('id')));
  }

  /**
   * Submit handler
   * @param contact
   */
  onSubmit = function(contact) {
    this.dataService.updateContact(contact._id, contact).subscribe();
    this.goToList();
  };

  /**
   * Cancel handler
   */
  onCancel = function() {
    this.goToList();
  };

  /**
   * Navigate to contact list
   */
  goToList() {
    this.router.navigate(['/contacts']);
  }

}
