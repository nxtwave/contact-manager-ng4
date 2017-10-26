import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module';

import {ContactsRoutingModule, routedComponents} from './contacts.routing';
import {ContactCardComponent} from './contact-card/contact-card.component';

@NgModule({
  imports: [SharedModule, ContactsRoutingModule],
  declarations: [ContactCardComponent, routedComponents]
})
export class ContactsModule {}
