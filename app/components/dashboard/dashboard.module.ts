import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoModule} from '../todo/todo.module';
import {AppRoutingModule} from '../../app-routing.module';
import {RouterModule} from '@angular/router';
import {ShowTipsDirective} from '../../derective/show-tips.directive';
import {DashboardComponent} from './dashboard.component';
import {TodoReactiveFormModule} from '../todo-reactive-form/todo-reactive-form.module';
import {WikipediaSerachModule} from '../mock-http-service/wikipedia-serach.module';
import {JsonpModule} from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    TodoModule,
    TodoReactiveFormModule,
    AppRoutingModule,
    RouterModule,
    WikipediaSerachModule,
    // JsonpModule
],
  declarations: [
    DashboardComponent,
    ShowTipsDirective
  ]
})
export class DashboardModule {
}
