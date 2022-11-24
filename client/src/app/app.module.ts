import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { NgCalendarModule  } from 'ionic2-calendar';
import {  CalendarModalOptions, CalendarModule } from 'ion2-calendar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LedgerPageModule } from './ledger/ledger.module';


@NgModule({
  declarations: [AppComponent],
  imports: [NgCalendarModule,LedgerPageModule,CalendarModule,BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
