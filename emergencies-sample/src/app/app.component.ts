import { Component, OnInit } from '@angular/core';
import { IPatientAddOption } from './add-patient/add-patient.component';
import { IPatient } from './shared/models';

@Component({
  selector: 'app-root',
  template: `
    <h1>Serviço de Urgência</h1>
    <div>
      <app-add-patient [options]="options" (userAdded)="userAdded($event)"></app-add-patient>
    </div>
    <div>
      <app-search-patient (term)="searchTerm = $event"></app-search-patient>
    </div>
    <div>
      <app-list-patient [options]="options"
                        [patients]="patients"
                        [searchTerm]="searchTerm"
                        (removePatient)="removePatient($event)"
                        (changeAttend)="changeAttended($event)"></app-list-patient>
    </div>
    <div>
      <h4>Ações</h4>
      <button (click)="deleteAttended()">Limpar Atendidos</button>
      <button (click)="deleteAll()">Limpar Todos</button>
    </div>
  `,
  styles: []
})
export class AppComponent {

  loggedIn: boolean;
  searchTerm: string;

  options: IPatientAddOption[] = [{
    value: 'vm',
    text: 'Vermelho'
  }, {
    value: 'a',
    text: 'Amarelo'
  }, {
    value: 'vr',
    text: 'Verde'
  }];

  patients: IPatient[] = [];

  userAdded(patient: IPatient) {
    this.patients = this.patients.concat(patient);
  }

  removePatient(removePatient: IPatient) {
    this.patients = this.patients.filter(patient => patient.id !== removePatient.id);
  }

  changeAttended(changePatient: IPatient) {
    const index = this.patients.findIndex(patient => patient.id === changePatient.id);
    if (index) {
      this.patients[index] = changePatient;
    }
  }

  deleteAttended() {
    this.patients = this.patients.filter(patient => !patient.attended);
  }

  deleteAll() {
    this.patients = [];
  }
}
