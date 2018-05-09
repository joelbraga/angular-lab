import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormBase } from './form-base';
import { FormControlService } from './form-control.service';

@Component({
  selector: 'app-dynamic-form',
  template: `
  <div>
    <form (ngSubmit)="onSubmit()" [formGroup]="form">

      <div *ngFor="let question of questions" class="form-row">
        <app-question [question]="question" [form]="form"></app-question>
      </div>

      <div class="form-row">
        <button type="submit" [disabled]="!form.valid">Save</button>
      </div>
    </form>

    <div *ngIf="payLoad">
      <strong>Saved the following values</strong><br>{{payLoad}}
    </div>
  </div>
  `,
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: FormBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: FormControlService) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
