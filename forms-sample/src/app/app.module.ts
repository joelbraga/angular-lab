import { DynamicModule } from './dynamic/dynamic.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { TemplateForm2Component } from './template-form-2/template-form-2.component';
import { ModelFormComponent } from './model-form/model-form.component';
import { ModelForm2Component } from './model-form-2/model-form-2.component';
import { ModelFormValidationsComponent } from './model-form-validations/model-form-validations.component';


@NgModule({
  declarations: [
    AppComponent,
    // TemplateFormComponent,
    // TemplateForm2Component,
    // ModelFormComponent,
    // ModelForm2Component,
    // ModelFormValidationsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
