import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {TodoFormComponent} from './todo-form/todo-form.component';
import {TodoItemComponent} from './todo-item/todo-item.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {FilterTodoPipe} from '../../pipes/filter.todo.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TodoFormComponent,
    TodoListComponent,
    TodoItemComponent,
    FilterTodoPipe,
  ]
})
export class TodoModule {
}
