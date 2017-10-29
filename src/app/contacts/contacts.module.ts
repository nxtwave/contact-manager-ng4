import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module';

import {ContactsRoutingModule, routedComponents} from './contacts.routing';
import {ContactCardComponent} from './contact-card/contact-card.component';
import {ContactDataService} from './shared/contacts.service';

@NgModule({
  imports: [SharedModule, ContactsRoutingModule],
  declarations: [ContactCardComponent, routedComponents],
  providers: [ContactDataService],
})
export class ContactsModule {}
