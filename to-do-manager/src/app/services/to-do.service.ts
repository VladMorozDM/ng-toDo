import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';
import { FilterService } from './filter-service.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  constructor(private filterService: FilterService, private http: HttpClient) { }

  getALl(): Observable<Todo[]> {
    return this.http.get<Todo[]>('http://127.0.0.1:3000/todo');
  }

  // editItem(item: Todo): void {
  //   this.items = this.items.map( oldItem => {
  //     if (oldItem.id !== item.id) {
  //       return oldItem;
  //     }
  //     return { ...item, done: !item.done };
  //   } );
  //   this.todoBehaviorSubject.next(this.items);
  // }
  //
  // addItem(description: string): void {
  //   const date = new Date();
  //   const parsedDate = `${date.getDate()}.${months[date.getMonth()]}.${date.getFullYear()}` ;
  //   this.items.push({date: parsedDate, description, id: this.id, done: false});
  //   this.filteredItems.push( {date: parsedDate, description, id: this.id, done: false});
  //   this.todoBehaviorSubject.next(this.currentItems());
  //   this.id = `${Number(this.id) + 1}`;
  // }
  //
  // deleteItem(item: Todo) {
  //   this.items = this.items.filter(oldItem => oldItem.id !== item.id);
  //   this.filteredItems = this.filteredItems.filter( oldItem => oldItem.id !== item.id );
  //   this.todoBehaviorSubject.next(this.currentItems());
  // }
  //
  // filterItems(sample: string) {
  //   if ( sample === '') {
  //     this.isFiltered = false;
  //     this.todoBehaviorSubject.next(this.items);
  //   } else {
  //     this.isFiltered = true;
  //     this.filteredItems = this.filterService.getFilteredItems(sample, this.items);
  //     this.todoBehaviorSubject.next(this.filteredItems);
  //   }
  // }
  //
  // sortItems(sortingType: string) {
  //   const sorted = this.filterService.getSortedItems(sortingType, this.currentItems());
  //   this.todoBehaviorSubject.next(sorted);
  // }
}
