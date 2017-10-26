import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ContactListComponent} from './contact-list/contact-list.component';
import {ContactDetailComponent} from './contact-detail/contact-detail.component';

/**
 * Contact routes:
 */
const routes: Routes = [
  {path: 'contacts', component: ContactListComponent},
  {path: 'contact/:id', component: ContactDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule {}
export const routedComponents = [ContactListComponent, ContactDetailComponent];
