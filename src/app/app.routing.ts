import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'home', redirectTo: '/home'},
  {path: 'about', redirectTo: '/about'},
  {path: 'contacts', loadChildren: 'app/contacts/contacts.module#ContactsModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
