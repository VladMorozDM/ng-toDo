import { Component, OnInit } from '@angular/core';
import { ToDoService } from './services/to-do.service';
import { Todo } from './models/Todo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  title = 'to-do-manager';
  todos$: Observable<Todo[]>;

  constructor(private toDoService: ToDoService) {
  }

  ngOnInit() {
    this.todos$ = this.toDoService.getALl();
  }
}
