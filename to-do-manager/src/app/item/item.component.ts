import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Todo } from '../models/Todo'

@Component({
  selector: 'item-comp',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() description: string;
  @Input() done: boolean;
  @Input() date: string;
  @Input() id: number;
  constructor() { }

  ngOnInit() {
  }
  onCheckChange(): void{
    this.onChanged.emit(this);
  }
  onClickDelete( itemId ): void{
    this.onDelete.emit(this);
  }
  @Output() onChanged = new EventEmitter<Todo>();
  @Output() onDelete = new EventEmitter<Todo>();


}
