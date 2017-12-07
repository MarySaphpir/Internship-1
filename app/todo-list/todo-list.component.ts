import {Component, OnInit} from '@angular/core';
import {Todo} from '../services/todo.data';
import {TodoService} from '../services/todo.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  color: string;

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  toggle(todo: Todo) {
    this.todoService.resolveTodo(todo);
  }

  delete(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
