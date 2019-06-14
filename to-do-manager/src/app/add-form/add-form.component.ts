import { Component} from '@angular/core';

export class User{
  name: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'add-form',
  template: `<div>
    <div class="form-group">
      <label>Имя</label>
      <input class="form-control" name="name" [(ngModel)]="user.name" #name="ngModel" required />
      <div [hidden]="name.valid || name.untouched" class="alert alert-danger">
        Не указано имя
      </div>
    </div>
    <div class="form-group">
      <label>Email</label>
      <input class="form-control" name="email" [(ngModel)]="user.email" #email="ngModel"
             required pattern="[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}" />
      <div [hidden]="email.valid || email.untouched" class="alert alert-danger">
        Некорректный email
      </div>
    </div>
    <div class="form-group">
      <label>Телефон</label>
      <input class="form-control" name="phone" [(ngModel)]="user.phone" #phone="ngModel"
             required pattern="[0-9]{10}" />
      <div [hidden]="phone.valid || phone.untouched" class="alert alert-danger">
        Некорректный телефон
      </div>
    </div>
    <div class="form-group">
      <button class="btn btn-default" (click)="addUser()">Добавить</button>
    </div>
  </div>`
})
export class AddForm {

  user: User = new User();
  addUser(){
    console.log();
    console.log(this.user);
  }
}
