import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPatient } from '../shared/models';
import { IPatientAddOption } from '../add-patient/add-patient.component';

@Component({
  selector: 'app-list-patient',
  template: `
    <div *ngFor="let option of options">
      <h5>{{option.text}}</h5>
      <div *ngFor="let patient of (patients | filterPatient:option.value:'severity' | filterPatient:searchTerm:'name')">
        <app-patient [patient]="patient"
                    (changeAttend)="changeAttend.emit($event)"
                    (removePatient)="removePatient.emit($event)"></app-patient>
      </div>
    </div>
  `
})
export class ListPatientComponent implements OnInit {

  @Input()
  options: IPatientAddOption[];

  @Input()
  patients: IPatient[];

  @Input()
  searchTerm: string;

  @Output()
  removePatient = new EventEmitter<IPatient>();

  @Output()
  changeAttend = new EventEmitter<IPatient>();

  constructor() { }

  ngOnInit() {
  }

}
