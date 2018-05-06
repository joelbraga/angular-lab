import { SearchPatientComponent } from './search-patient/search-patient.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SearchPatientComponent],
  exports: [SearchPatientComponent]
})
export class SearchModule { }
