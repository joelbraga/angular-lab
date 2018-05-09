import { Injectable } from '@angular/core';

import { DropdownForm } from './form-dropdown';
import { FormBase } from './form-base';
import { TextboxForm } from './form-textbox';

@Injectable()
export class FormService {

  getInputs() {

    const obj = [
      {
        type: 'dropdown',
        data: {
          key: 'country',
          label: 'Country',
          options: [
            { key: 'pt', value: 'Portugal' },
            { key: 'es', value: 'Spain' },
            { key: 'fr', value: 'France' },
            { key: 'br', value: 'Brasil' },
          ],
          order: 3
        }
      },
      {
        type: 'textbox',
        data: {
          key: 'username',
          label: 'Username',
          value: 'joel',
          required: true,
          order: 2
        }
      },
      {
        type: 'textbox',
        data: {
          key: 'password',
          label: 'Password',
          type: 'password',
          order: 1
        }
      }
    ];

    const inputs: FormBase<any>[] = obj.map(input => {
      switch (input.type) {
        case 'textbox':
          return new TextboxForm(input.data);
        case 'dropdown':
          return new DropdownForm(input.data);
        default:
          break;
      }
    });

    return inputs.sort((a, b) => a.order - b.order);
  }
}
