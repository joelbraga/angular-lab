import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPatient } from '../shared/models';

export interface IPatientAddOption {
   value: string;
   text: string;
}

@Component({
  selector: 'app-add-patient',
  template: `
    <input placeholder="Name: " #inputName (keyup)="result.name = inputName.value"/>
    <select [(ngModel)]="result.severity">
      <option *ngFor="let option of options" [ngValue]="option.value">{{option.text}}</option>
    </select>
    <button (click)="addUser(); inputName.value=''; result.name=''; result.severity='';">Adicionar</button>
  `,
  styles: []
})
export class AddPatientComponent implements OnInit {

  @Input()
  options: IPatientAddOption[];

  @Output()
  userAdded = new EventEmitter<IPatient>();

  result: IPatient = {
    id: '',
    name: '',
    severity: '',
    attended: false,
  };

  constructor() { }

  ngOnInit() {
  }

  addUser() {
    const patient = Object.assign({}, this.result, {id: new Date().toISOString(), attended: false});
    this.userAdded.emit(patient);
  }

}
