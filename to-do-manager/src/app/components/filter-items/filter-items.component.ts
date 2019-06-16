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
  }
  changeFilterSample():void{
    this.todoService.filterItems( this.filterForm.value.filterValue )
  }
  changeSorting():void{
    this.todoService.sortItems( this.filterForm.value.sortValue )
  }
}
