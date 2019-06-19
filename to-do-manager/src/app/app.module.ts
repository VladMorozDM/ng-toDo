import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { ToDoService } from './services/to-do.service'
import { FilterService } from './services/filter-service.service'

import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemComponent } from './components/item/item.component';
import { FilterItems } from './components/filter-items/filter-items.component';
import { AddForm } from './components/add-form/add-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemComponent,
    FilterItems,
    AddForm
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [
    ToDoService,
    FilterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
