import { Component } from '@angular/core';
import { FormService } from './dynamic/form.service';

@Component({
  selector: 'app-root',
  template: `
    <!--<app-template-form></app-template-form>-->
    <!--<app-template-form-2></app-template-form-2>-->
    <!--<app-model-form></app-model-form>-->
    <!--<app-model-form-2></app-model-form-2>-->
    <!--<app-model-form-validations></app-model-form-validations>-->
    <app-dynamic-form [questions]="questions"></app-dynamic-form>
  `,
  styles: []
})
export class AppComponent {
  questions: any[];

  constructor(service: FormService) {
    this.questions = service.getInputs();
  }
}
