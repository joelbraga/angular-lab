import { Component, OnInit } from '@angular/core';
import { IPatientAddOption } from './add/add-patient/add-patient.component';
import { IPatient } from './shared/models';
import { ControlService } from './shared/control.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Serviço de Urgência</h1>
    <div>
      <app-add-patient [options]="options"></app-add-patient>
    </div>
    <div>
      <app-search-patient (term)="searchTerm = $event"></app-search-patient>
    </div>
    <div>
      <app-list-patient [options]="options"
                        [searchTerm]="searchTerm"></app-list-patient>
    </div>
    <div>
      <h4>Ações</h4>
      <button (click)="controlService.deleteAttended()">Limpar Atendidos</button>
      <button (click)="controlService.deleteAll()">Limpar Todos</button>
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

  constructor(public controlService: ControlService) {

  }
}
