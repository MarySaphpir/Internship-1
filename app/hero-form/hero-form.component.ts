import {Component} from '@angular/core';
import {Location} from '@angular/common';
import {TodoService} from '../services/todo.service';

@Component({
  selector: 'todo-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
  title = '';

  constructor(private todoService: TodoService,
              private location: Location) {
  }

  onSubmit(todoForm) {
    this.todoService.createTodo(this.title);
    todoForm.reset();
  }

  goBack() {
    this.location.back();
  }

}
