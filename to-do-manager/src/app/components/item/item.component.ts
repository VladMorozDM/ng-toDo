import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Todo } from '../../models/Todo'

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
    this.onChanged.emit({
      id: this.id,
      description: this.description,
      done: this.done, date: this.date
    } );
  }
  onClickDelete( itemId ): void{
    this.onDelete.emit({
      id: this.id,
      description: this.description,
      done: this.done, date: this.date
    } );
  }
  @Output() onChanged = new EventEmitter<Todo>();
  @Output() onDelete = new EventEmitter<Todo>();


}
