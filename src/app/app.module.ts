import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from './app.routing';

import {AppComponent} from './app.component';

import {ContactsModule} from './contacts/contacts.module';
import {HomeModule} from './home/home.module';
import {AboutModule} from './about/about.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ContactsModule,
    HomeModule,
    AboutModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
