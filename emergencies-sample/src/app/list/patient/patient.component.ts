import { ControlService } from './../../shared/control.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IPatient } from '../../shared/models';

@Component({
  selector: 'app-patient',
  template: `
    <input type="checkbox" [(ngModel)]="patient.attended" (click)="controlService.changeAttended(patient)"/>
    <span [ngClass]="{'patient-attended': patient.attended}">{{patient.name}}</span>
    <button (click)="controlService.removePatient(patient)">Remover</button>
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

  constructor(public controlService: ControlService) { }

  ngOnInit() {
  }

}
