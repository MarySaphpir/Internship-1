import {Component, Input, OnChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';
import {marks, Todo} from '../../services/data-model';

@Component({
  selector: 'todo-reactive-form',
  templateUrl: './todo-reactive-form.component.html',
  styleUrls: ['./todo-reactive-form.component.css']
})
export class TodoReactiveFormComponent implements OnChanges {
  todoForm: FormGroup;
  marks = marks;
  @Input() todoList: Todo;

  constructor(private formBuilder: FormBuilder) {
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
      todoName: ['', Validators.required],
      description: this.formBuilder.group({
        completed: false,
        comment: '',
        mark: ''
      }),
    });
  }
}
