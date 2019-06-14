import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo'

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  items: Todo[] = [
    {
      id: 1,
      description: "do your homework",
      done: false,
      date: "03.05.2019"
    },
    {
      id: 2,
      description: "wash hands",
      done: false,
      date: "01.05.2019"
    },
    {
      id: 3,
      description: "act surprisingly",
      done: true,
      date: "03.04.2019"
    },
  ];
  constructor() { }

  getItems(): Todo[]{
    return this.items;
  }
  redactItem( item: Todo  ): void{
    this.items = this.items.map( oldItem => {
      if(oldItem.id !== item.id) return oldItem;
      return { ...item, done: !item.done }
    } )
  }
  addItem( item: Todo ): void{
    this.items.push(item)
  }
  deleteItem( item: Todo ){
    this.items = this.items.filter( oldItem => oldItem.id !== item.id )
  }

}
