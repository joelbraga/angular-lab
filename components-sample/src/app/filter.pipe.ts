import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(values: string[], term: string): any {
    if (!term) {
      return values;
    }
    return values
      .filter(value => value.toLowerCase().includes(term.toLowerCase()));
  }

}
