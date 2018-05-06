import { ControlService } from './../../shared/control.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPatient } from '../../shared/models';
import { IPatientAddOption } from '../../add/add-patient/add-patient.component';

@Component({
  selector: 'app-list-patient',
  template: `
    <div *ngFor="let option of options">
      <h5>{{option.text}}</h5>
      <div *ngFor="let patient of (patients | filterPatient:option.value:'severity' | filterPatient:searchTerm:'name')">
        <app-patient [patient]="patient"></app-patient>
      </div>
    </div>
  `
})
export class ListPatientComponent implements OnInit {

  @Input()
  options: IPatientAddOption[];

  @Input()
  searchTerm: string;

  patients: IPatient[] = [];

  constructor(public controlService: ControlService) { }

  ngOnInit() {
    this.controlService.patientsState.subscribe((patients) => this.patients = patients);
  }

}
