import { Component, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToDoService } from '../../services/to-do.service';


@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent {

  @ViewChild('addForm', {static: false}) myForm: NgForm;

  get isNeededToWarn(): boolean{
   // console.log( this.myForm );
    return this.myForm ? this.myForm.touched && this.myForm.invalid : false
  }

  constructor( private todoService: ToDoService) {
  }

  addUser(form: NgForm){
    // this.todoService.addItem( form.value.description );
  }
}
