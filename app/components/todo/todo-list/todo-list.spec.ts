import {Todo} from '../../../services/todo.data';
import {TodoService} from '../../../services/todo.service';
import {TodoListComponent} from './todo-list.component';
import {todos} from '../../../services/todo.data.service';

describe('Testing Todo List Component', () => {
  let mockTodoItem: Todo = {title: 'todo 1', completed: true};
  let todoListComponent: TodoListComponent;

  beforeEach(() => {
    todoListComponent = new TodoListComponent(new TodoService());
  });

  it('toggle method make todo completed', () => {
    todoListComponent.toggle(mockTodoItem);
    expect(mockTodoItem.completed).toEqual(true);
  });

  it('toggle method make todo completed', () => {
    todoListComponent.toggle(mockTodoItem);
    expect(mockTodoItem.completed).toEqual(true);
  });

  it('delete method should delete todo', ()=> {
    todoListComponent.delete(mockTodoItem);
    expect(todos.indexOf(mockTodoItem) === -1)
  })
});
