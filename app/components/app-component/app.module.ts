import {NgModule} from '@angular/core';
import {AppRoutingModule} from '../../app-routing.module';
import {DashboardModule} from '../dashboard/dashboard.module';
import {AppComponent} from './app.component';

@NgModule({
  imports: [
    AppRoutingModule,
    DashboardModule
  ],
  declarations: [
    AppComponent
  ]
})
export class AppComponentModule {
}
