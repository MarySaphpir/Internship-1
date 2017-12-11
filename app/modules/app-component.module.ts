import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {CommonModule} from '@angular/common';
import {AppRoutingModule} from '../app-routing.module';
import {DashboardModule} from './dashboard.module';
import {AppComponent} from '../components/app-component/app.component';


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
