import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {TodoReactiveFormComponent} from './todo-reactive-form.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    TodoReactiveFormComponent,
  ]
})
export class TodoReactiveFormModule {
}
