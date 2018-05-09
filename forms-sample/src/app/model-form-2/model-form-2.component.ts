import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-model-form-2',
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
export class ModelForm2Component implements OnInit {

  form = FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: '',
      password: '',
      name: this.formBuilder.group({
        firstName: '',
        lastName: '',
      })
    });

    this.form.valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(value => {
        console.log(value);
      });
  }

  submitForm() {
    console.log(this.form);
    console.log(this.form.value);
    this.form.reset();
  }


}
