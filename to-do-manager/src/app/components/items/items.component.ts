import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { ToDoService } from '../../services/to-do.service';
import { Todo } from '../../models/Todo';


@Component({
  selector: 'items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit{
  items: Todo[];
  constructor( private todoService: ToDoService ) { }
  ngOnInit() {
    this.todoService.getInstance().subscribe(val => {
      this.items = val;
    })
  }
  onChanged( item: Todo ):void{
    this.todoService.redactItem( {
      id: this.id,
      description: this.description,
      done: this.done, date: this.date
    } );
  }
  onDelete( item: Todo ): void{
    this.todoService.deleteItem( {
      id: this.id,
      description: this.description,
      done: this.done, date: this.date
    } );
  }
}
