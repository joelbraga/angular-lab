import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-search',
  template: `
    <input appHighlight='red' placeholder="Text..." #a (keyup)="termSearched.emit(a.value)" />
  `,
  styles: []
})
export class SearchComponent implements OnInit {

  @Input()
  userAuthenticated: boolean;

  @Output()
  termSearched = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
