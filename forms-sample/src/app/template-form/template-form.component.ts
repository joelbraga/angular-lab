import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  template: `
    <form #form="ngForm" (ngSubmit)="submitForm(form)">
      <label>Username</label>
      <input type="text" name="username" ngModel/>

      <label>Password</label>
      <input type="text" name="password" ngModel/>

      <div ngModelGroup="name">
        <label>First Name</label>
        <input type="text" name="firstName" ngModel/>

        <label>Last Name</label>
        <input type="text" name="lastName" ngModel/>
      </div>

      <button type="submit">Submit</button>
    </form>
  `,
  styles: []
})
export class TemplateFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(value) {
    console.log(value);
  }

}
