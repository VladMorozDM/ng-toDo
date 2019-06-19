import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToDoService } from '../../services/to-do.service'


@Component({
  selector: 'add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddForm implements OnInit{
  constructor( private todoService: ToDoService ){}
  @ViewChild("addForm", {static: false})
  private myForm: ElementRef;
  get isNeededToWarn(): boolean{
    return this.myForm ? this.myForm.touched && this.myForm.invalid : false
  }
  addUser( form: NgForm ){
    this.todoService.addItem( form.value.description );

  }
}
