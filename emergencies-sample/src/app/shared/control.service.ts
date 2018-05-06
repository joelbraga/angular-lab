import { Injectable } from '@angular/core';
import { IPatient } from './models';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ControlService {

  constructor() { }

  private patients: IPatient[] = [];
  public patientsState = new BehaviorSubject<IPatient[]>([]);

  userAdded(patient: IPatient) {
    this.patients = this.patients.concat(patient);
    this.patientsState.next(this.patients);
  }

  removePatient(removePatient: IPatient) {
    this.patients = this.patients.filter(patient => patient.id !== removePatient.id);
    this.patientsState.next(this.patients);
  }

  changeAttended(changePatient: IPatient) {
    const index = this.patients.findIndex(patient => patient.id === changePatient.id);
    if (index) {
      this.patients[index] = changePatient;
    }
    this.patientsState.next(this.patients);
  }

  deleteAttended() {
    this.patients = this.patients.filter(patient => !patient.attended);
    this.patientsState.next(this.patients);
  }

  deleteAll() {
    this.patients = [];
    this.patientsState.next(this.patients);
  }
}
