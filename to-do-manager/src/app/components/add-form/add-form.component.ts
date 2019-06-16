import { Component } from '@angular/core';
import { ToDoService } from '../../services/to-do.service'


export class Data{
  description: string;
}


@Component({
  selector: 'add-form',
  templateUrl: './add-form.component.html'
})
export class AddForm {
  constructor( private todoService: ToDoService ){}
  formData: Data = new Data();
  addUser(){
    this.todoService.addItem( this.formData.description )
  }
}
