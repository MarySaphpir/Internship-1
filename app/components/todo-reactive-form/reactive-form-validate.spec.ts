import {TodoReactiveFormComponent} from './todo-reactive-form.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormValidator} from './form.validator';

describe('Reactive form testing', () => {
  let reactiveForm: TodoReactiveFormComponent;

  beforeEach(() => {
    reactiveForm = new TodoReactiveFormComponent(new FormBuilder(), new FormValidator());
  });

  it('form invalid when empty', () => {
    expect(reactiveForm.todoForm.valid).toBeFalsy();
  });

  it('email field validity', () => {
    let email = reactiveForm.todoForm.controls['todoName'];
    expect(email.valid).toBeFalsy();
  });

  it('email field validity', () => {
    let errors: {};
    let todoName = reactiveForm.todoForm.controls['todoName'];
    errors = todoName.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('todo name validity', () => {
    let todoName = reactiveForm.todoForm.controls['todoName'];
    todoName.setValue('test');
    expect(todoName.value).toEqual('test');
  });

  it('submit form checking', () =>{
    let todoName = reactiveForm.todoForm.controls['todoName'];
    todoName.setValue('test');
    let descriptions = reactiveForm.todoForm.controls.description;
    descriptions.setValue({completed: true, comment: 'test', mark: '5'});
    expect(reactiveForm.todoForm.controls.description.value).toEqual({completed: true, comment: 'test', mark: '5'});
  })

});
