import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { ListPatientComponent } from './list-patient/list-patient.component';
import { FilterPatientPipe } from './filter-patient.pipe';
import { SearchPatientComponent } from './search-patient/search-patient.component';
import { PatientComponent } from './patient/patient.component';


@NgModule({
  declarations: [
    AppComponent,
    AddPatientComponent,
    ListPatientComponent,
    FilterPatientPipe,
    SearchPatientComponent,
    PatientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
