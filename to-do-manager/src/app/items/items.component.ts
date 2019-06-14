import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { ToDoService } from '../services/to-do.service'
import { Todo } from '../models/Todo'

@Component({
  selector: 'items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit,AfterContentChecked {
  items: Todo[];
  constructor( private todoService: ToDoService ) { }

  ngOnInit() {
    this.items = this.todoService.getItems();
  }
  ngAfterContentChecked(){
    this.items = this.todoService.getItems();
  }
  onChanged( item: Todo ):void{
    this.todoService.redactItem( item );
  }
  onDelete( item: Todo ): void{
    this.todoService.deleteItem( item );
  }
}
