import {Injectable} from '@angular/core';
import {Todo} from './todo.data';
import {todos} from './todo.data.service';

@Injectable()
export class TodoService {
  private todos: Todo[] = todos;

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

  resolveTodo(todo: Todo) {
    todo.completed = true;
  }
}
