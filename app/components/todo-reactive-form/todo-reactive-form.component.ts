import {Component, Input, OnChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {marks, Todo} from '../../services/data-model';
import {FormValidator} from './form.validator';

@Component({
  selector: 'todo-reactive-form',
  templateUrl: './todo-reactive-form.component.html',
})
export class TodoReactiveFormComponent implements OnChanges {
  todoForm: FormGroup;
  marks = marks;
  @Input() todoList: Todo;

  constructor(private formBuilder: FormBuilder, private validator: FormValidator) {
    this.createTodoForm();
  }

  ngOnChanges() {
    this.todoForm.reset({
      todoName: ['', Validators.required],
      description: this.formBuilder.group({
        completed: false,
        comment: '',
        mark: ''
      }),
    });
  }

  submit() {
    console.log(this.todoForm.value);
    this.todoForm.reset();
  }

  createTodoForm() {
    this.todoForm = this.formBuilder.group({
      todoName: ['', [Validators.required, this.validator.hasExclamationMark]],
      description: this.formBuilder.group({
        completed: false,
        comment: '',
        mark: ''
      }),
    });
  }
}
