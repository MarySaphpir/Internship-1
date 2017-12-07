import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodoFormComponent} from './components/todo/todo-form/todo-form.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {TodoReactiveFormComponent} from './components/todo-reactive-form/todo-reactive-form.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent, pathMatch: 'full'},
  {path: 'todo', component: TodoFormComponent, pathMatch: 'full'},
  {path: 'todo-reactive', component: TodoReactiveFormComponent, pathMatch: 'full'}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {
}
