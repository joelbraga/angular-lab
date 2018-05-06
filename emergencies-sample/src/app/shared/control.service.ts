import { Injectable } from '@angular/core';
import { IPatient } from './models';

@Injectable()
export class ControlService {

  constructor() { }

  private patients: IPatient[] = [];
  private patientsCB: Function[] = [];

  getPatients(cb: Function): void {
    this.patientsCB.push(cb);
  }

  updatePatients() {
    this.patientsCB.forEach(cb => cb(this.patients));
  }

  userAdded(patient: IPatient) {
    this.patients = this.patients.concat(patient);
    this.updatePatients();
  }

  removePatient(removePatient: IPatient) {
    this.patients = this.patients.filter(patient => patient.id !== removePatient.id);
    this.updatePatients();
  }

  changeAttended(changePatient: IPatient) {
    const index = this.patients.findIndex(patient => patient.id === changePatient.id);
    if (index) {
      this.patients[index] = changePatient;
    }
    this.updatePatients();
  }

  deleteAttended() {
    this.patients = this.patients.filter(patient => !patient.attended);
    this.updatePatients();
  }

  deleteAll() {
    this.patients = [];
    this.updatePatients();
  }
}
