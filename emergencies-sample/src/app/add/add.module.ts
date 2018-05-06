import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
  ],
  declarations: [AddPatientComponent],
  exports: [AddPatientComponent]
})
export class AddModule { }
