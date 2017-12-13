import {TodoItemComponent} from './todo-item.component';

describe('test event emitter', () => {
  let todoitem: TodoItemComponent;
  let fakeTodo = {title: 'test', completed: true};

  it('should emit resolve event', (done) => {
    todoitem = new TodoItemComponent();

    todoitem.toggle.subscribe(g => {
      expect(g).toEqual(fakeTodo);
      done();
    });

    todoitem.onResolve();
  });
});
