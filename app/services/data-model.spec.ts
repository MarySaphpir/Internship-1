import {TodoService} from "./todo.service";
import {todos} from "./todo.data.service";

describe('Todo', () => {

  let todoService: TodoService;

  beforeEach(() => {
    todoService = new TodoService();
  });

  it('should return todos list', () => {
    expect(todoService.getTodos()).toEqual(todos);
  });

  it('should create todo with title', () => {
    const title = 'title';

    todoService.createTodo(title);
    const isExist = todoService.getTodos().some(todo => todo.title === title);

    expect(isExist).toBe(true);
  });
});
