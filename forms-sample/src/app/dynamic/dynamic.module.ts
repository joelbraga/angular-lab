import { FormControlService } from './form-control.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import { FormService } from './form.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
  ],
  declarations: [DynamicFormComponent, DynamicFormQuestionComponent],
  providers: [FormService, FormControlService],
  exports: [DynamicFormComponent]
})
export class DynamicModule { }
