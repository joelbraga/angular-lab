import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form-2',
  template: `
    <form #form="ngForm" (ngSubmit)="submitForm(form.value)">
      <label>Username</label>
      <input type="text" name="username" [(ngModel)]="user.username"/>

      <label>Password</label>
      <input type="text" name="password" [(ngModel)]="user.password"/>

      <div ngModelGroup="name">
        <label>First Name</label>
        <input type="text" name="firstName" [(ngModel)]="user.name.firstName"/>

        <label>Last Name</label>
        <input type="text" name="lastName" [(ngModel)]="user.name.lastName"/>
      </div>

      <div>{{ user | json }}</div>

      <button type="submit">Submit</button>
    </form>
  `,
  styles: []
})
export class TemplateForm2Component implements OnInit {

  user = {
    username: '',
    password: '',
    name: {
      firstName: 'Hello',
      lastName: 'World'
    }
  };

  constructor() { }

  ngOnInit() {
  }

  submitForm(value) {
    console.log(value);
  }

}
