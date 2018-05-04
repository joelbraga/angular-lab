import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IPatient } from '../shared/models';

@Component({
  selector: 'app-patient',
  template: `
    <input type="checkbox" [(ngModel)]="patient.attended" (click)="changeAttend.emit(patient)"/>
    <span [ngClass]="{'patient-attended': patient.attended}">{{patient.name}}</span>
    <button (click)="removePatient.emit(patient)">Remover</button>
  `,
  styles: [`
    .patient-attended {
      text-decoration: line-through;
    }
  `]
})
export class PatientComponent implements OnInit {

  @Input()
  patient: IPatient;

  @Output()
  removePatient = new EventEmitter<IPatient>();

  @Output()
  changeAttend = new EventEmitter<IPatient>();

  constructor() { }

  ngOnInit() {
  }

}
