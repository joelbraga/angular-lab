import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-patient',
  template: `
    <input placeholder="Pesquisa..." #inputSearch (keyup)="term.emit(inputSearch.value)"/>
  `,
  styles: []
})
export class SearchPatientComponent implements OnInit {

  @Output()
  term = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
