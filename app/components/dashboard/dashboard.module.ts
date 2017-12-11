import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TodoModule} from '../todo/todo.module';
import {ShowTipsDirective} from '../../derective/show-tips.directive';
import {DashboardComponent} from './dashboard.component';
import {TodoReactiveFormModule} from '../todo-reactive-form/todo-reactive-form.module';
import {WikipediaSerachModule} from '../wikipedia-search/wikipedia-serach.module';

@NgModule({
  imports: [
    RouterModule,
    TodoModule,
    TodoReactiveFormModule,
    WikipediaSerachModule,
],
  declarations: [
    DashboardComponent,
    ShowTipsDirective
  ]
})
export class DashboardModule {
}
