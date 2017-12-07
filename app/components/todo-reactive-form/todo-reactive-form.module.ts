import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {TodoReactiveFormComponent} from './todo-reactive-form.component';
import {ShowTipsDirective} from '../../../../../int/app/show-tips.directive';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    TodoReactiveFormComponent,
    ShowTipsDirective,
  ]
})
export class TodoReactiveFormModule { }
