import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo'


@Injectable()
export class FilterService {
  constructor() { }

  public getSortedItems( newSortingType: string, items: Todo[] ){

  }
  public getFilteredItems( filterSample: string, items: Todo[] ): Todo[] | any[]{
    console.log( items, "from here" );
    return this.filterItems( filterSample, items )
  }
  private filterItems( filterSample: string, items: Todo[] ): Todo[] | any[]{
    return items.filter( task => task.description.toLowerCase().includes( filterSample.toLowerCase() ))
  }
}
