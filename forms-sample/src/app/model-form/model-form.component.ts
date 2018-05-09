import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-model-form',
  template: `
    <form [formGroup]="form" (ngSubmit)="submitForm()">
      <label>Username</label>
      <input type="text" formControlName="username"/>

      <label>Password</label>
      <input type="text" formControlName="password"/>

      <div formGroupName="name">
        <label>First Name</label>
        <input type="text" formControlName="firstName"/>

        <label>Last Name</label>
        <input type="text" formControlName="lastName"/>
      </div>

      <button type="submit">Submit</button>
    </form>
  `,
  styles: []
})
export class ModelFormComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    name: new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
    })
  });

  constructor() { }

  ngOnInit() {
  }

  submitForm() {
    console.log(this.form);
  }

}
