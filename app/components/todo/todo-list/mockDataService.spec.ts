import {Todo} from "../../../services/todo.data"
import {todos} from "../../../services/todo.data.service";

export class mockDataService {
  todos: Todo[] = [
    {title: 'todo 1', completed: true},
    {title: 'todo 2', completed: false},
    {title: 'todo 3', completed: false}
  ];

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
