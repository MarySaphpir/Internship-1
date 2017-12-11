import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {CommonModule} from '@angular/common';
import {AppRoutingModule} from '../../app-routing.module';
import {DashboardModule} from '../dashboard/dashboard.module';
import {AppComponent} from './app.component';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    DashboardModule
  ],
  declarations: [
    AppComponent
  ],
})
export class AppComponentModule {
}
