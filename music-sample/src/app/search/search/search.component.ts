import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  template: `
    <input placeholder="Pesquisa..." #inputSearch (keyup)="term.emit(inputSearch.value)"/>
  `,
  styles: []
})
export class SearchComponent implements OnInit {

  @Output()
  term = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
