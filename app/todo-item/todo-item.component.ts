import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from '../services/todo.data';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  constructor() {
  }

  @Input() todo: Todo;
  @Input() color: string;
  @Output() delete = new EventEmitter();
  @Output() toggle = new EventEmitter();

  onToggle() {
    this.toggle.emit(this.todo);
  }

  onDelete() {
    this.delete.emit(this.todo);
  }

}
