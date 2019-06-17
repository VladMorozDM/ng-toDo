import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo'


@Injectable()
export class FilterService {
  constructor() { }

  public getSortedItems( newSortingType: string, items: Todo[] ){
    switch( newSortingType ){
      case "default" : case "byTime" : return items.sort(this.sortByTime);
      case "byText" : return items.sort(this.sortByAlphabet)
    }
  }
  public getFilteredItems( filterSample: string, items: Todo[] ): Todo[] | any[]{
    return this.filterItems( filterSample, items )
  }
  private filterItems( filterSample: string, items: Todo[] ): Todo[] | any[]{
    return items.filter( task => task.description.toLowerCase().includes( filterSample.toLowerCase() ))
  }
  private sortByAlphabet(a, b) {
    if (a.description.toLowerCase() < b.description.toLowerCase())  return -1;
    if (a.description.toLowerCase() > b.description.toLowerCase())  return 1;
    return 0;
  }
  private sortByTime(a, b) {
    const firstDate = new Date(a.date);
    const secondDate = new Date(b.date);
    if( firstDate < secondDate ) return 1;
    if( firstDate > secondDate ) return -1;
    return 0;
  }

}
