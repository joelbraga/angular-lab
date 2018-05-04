import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPatient'
})
export class FilterPatientPipe implements PipeTransform {

  transform(values: any[], term: string, field: string): any {
    if (!values || !term) {
      return values;
    } else {
      return values
        .filter(value => value[field].toLowerCase().includes(term.toLowerCase()));
    }
  }

}
