import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

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
    HttpClientModule,
    ContactsModule,
    HomeModule,
    AboutModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
