import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';

import {Todo} from './todo.data';
import {todos} from './todo.data.service';

@Injectable()
export class TodoService {
  todos: Todo[] = todos;

  getTodos(): Todo[] {
    return this.todos;
  }

  createTodo(title: string) {
    const todo = new Todo(title);
    this.todos.push(todo);
  }

  deleteTodo(todo: Todo) {
    const indexOfTodo = this.todos.indexOf(todo);
    if (indexOfTodo > -1) {
      this.todos.splice(indexOfTodo, 1);
    }
  }

  toggleTodo(todo: Todo) {
    todo.completed = !todo.completed;
  }

  handleError(error: Error) {
    return Promise.reject(error.message);
  }
}
