import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { ToDoService } from  '../../services/to-do.service'

@Component({
  selector: 'filter-items',
  templateUrl: './filter-items.component.html',
  styleUrls: ['./filter-items.component.css']
})
export class FilterItems implements OnInit{
  filterForm: FormGroup;
  constructor( private todoService: ToDoService ) {
    this.filterForm  = new FormGroup({
      "filterValue": new FormControl(""),
      "sortValue": new FormControl("default")
    });
  }
  ngOnInit() {
    this.filterForm
      .get("filterValue")
      .valueChanges
      .subscribe( ( val:string ) => this.changeFilterSample(val) );
    this.filterForm
      .get("sortValue")
      .valueChanges
      .subscribe( ( val:string ) => this.changeSorting(val) );
  }
  changeFilterSample( sample: string):void{
    this.todoService.filterItems( sample )
  }
  changeSorting( sample: string ):void{
    this.todoService.sortItems( sample )
  }
}
