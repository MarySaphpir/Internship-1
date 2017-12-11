import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {TodoFormComponent} from '../components/todo/todo-form/todo-form.component';
import {TodoItemComponent} from '../components/todo/todo-item/todo-item.component';
import {TodoListComponent} from '../components/todo/todo-list/todo-list.component';
import {FilterTodoPipe} from '../pipes/filter.todo.pipe';

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
