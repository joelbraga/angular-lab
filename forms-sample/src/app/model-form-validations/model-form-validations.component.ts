import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

function ValidateJoel(control: AbstractControl) {
  if (!control.value.startsWith('joel')) {
    return { hasJoel: false };
  }
  return null;
}

@Component({
  selector: 'app-model-form-validations',
  template: `
    <form [formGroup]="form" novalidate (ngSubmit)="submitForm()">
      <label>Username</label>
      <input type="text" formControlName="username"/>
      <p *ngIf="(form.controls.username.dirty || form.controls.username.touched)
                && form.controls.username.errors">This field is required!</p>

      <label>Password</label>
      <input type="text" formControlName="password"/>
      <p *ngIf="(form.controls.password.dirty || form.controls.password.touched)
                && form.controls.password.errors">This field is required!</p>

      <div formGroupName="name">
        <label>First Name</label>
        <input *ngIf="false" type="text" formControlName="firstName"/>
        <p *ngIf="(form.controls.name.controls.firstName.dirty || form.controls.name.controls.firstName.touched)
                  && form.controls.name.controls.firstName.errors">This field has min length and start with joel!</p>

        <label>Last Name</label>
        <input type="text" formControlName="lastName"/>
        <p *ngIf="(form.controls.name.controls.lastName.dirty || form.controls.name.controls.lastName.touched)
                  && form.controls.name.controls.lastName.errors">This field has max length!</p>

      </div>

      <button type="submit">Submit</button>

    </form>
  `,
  styles: []
})
export class ModelFormValidationsComponent implements OnInit {

  form = FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      name: this.formBuilder.group({
        firstName: ['', [Validators.required, Validators.minLength(3), ValidateJoel]],
        lastName: ['', Validators.maxLength(20)],
      })
    });
  }

  submitForm() {
    console.log(this.form);
  }

}
