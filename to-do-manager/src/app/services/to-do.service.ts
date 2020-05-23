import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';
import { items } from '../models/initialItems';
import { FilterService } from './filter-service.service';
import { BehaviorSubject } from 'rxjs';

const months = [ 'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December' ];

@Injectable()
export class ToDoService {
  private items: Todo[] = [ ...items ];
  private filteredItems: Todo[] = [];
  private isFiltered = false;
  private todoBehaviorSubject = new BehaviorSubject<Todo[]>(this.items);
  private id = 7;
  private currentItems = () => this.isFiltered ? this.filteredItems : this.items;

  constructor(private filterService: FilterService) { }

  getInstance() {
    return this.todoBehaviorSubject;
  }

  editItem(item: Todo): void {
    this.items = this.items.map( oldItem => {
      if (oldItem.id !== item.id) {
        return oldItem;
      }
      return { ...item, done: !item.done };
    } );
    this.todoBehaviorSubject.next(this.items);
  }

  addItem(description: string): void {
    const date = new Date();
    const parsedDate = `${date.getDate()}.${months[date.getMonth()]}.${date.getFullYear()}` ;
    this.items.push({date: parsedDate, description, id: this.id, done: false});
    this.filteredItems.push( {date: parsedDate, description, id: this.id, done: false});
    this.todoBehaviorSubject.next(this.currentItems());
    this.id++;
  }

  deleteItem(item: Todo) {
    this.items = this.items.filter(oldItem => oldItem.id !== item.id);
    this.filteredItems = this.filteredItems.filter( oldItem => oldItem.id !== item.id );
    this.todoBehaviorSubject.next(this.currentItems());
  }

  filterItems(sample: string) {
    if ( sample === '') {
      this.isFiltered = false;
      this.todoBehaviorSubject.next(this.items);
    } else {
      this.isFiltered = true;
      this.filteredItems = this.filterService.getFilteredItems(sample, this.items);
      this.todoBehaviorSubject.next(this.filteredItems);
    }
  }

  sortItems(sortingType: string) {
    const sorted = this.filterService.getSortedItems(sortingType, this.currentItems());
    this.todoBehaviorSubject.next(sorted);
  }

}
