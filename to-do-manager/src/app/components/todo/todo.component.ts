import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo: Todo;

  @Output() onChanged = new EventEmitter<string>();
  @Output() onDelete = new EventEmitter<Todo>();

  onCheckChange() {
    this.onChanged.emit(this.todo.id);
  }

  onClickDelete(itemId: string) {
    this.onDelete.emit({
      id: this.todo.id,
      description: this.todo.description,
      done: this.todo.done,
      date: this.todo.date
    });
  }
}
