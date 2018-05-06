import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { FilterPatientPipe } from './filter-patient.pipe';
import { PatientComponent } from './patient/patient.component';
import { ListPatientComponent } from './list-patient/list-patient.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
  ],
  declarations: [ListPatientComponent, PatientComponent, FilterPatientPipe],
  // So este é exportado
  exports: [ListPatientComponent]
})
export class ListModule { }
