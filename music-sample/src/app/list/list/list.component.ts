import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  template: `
    <div *ngFor="let item of list">
      <h4>{{item.track}}</h4>
      <div>{{item.artist}}</div>
      <img [src]="item.thumbnail" />
    </div>
  `,
  styles: []
})
export class ListComponent implements OnInit {

  @Input()
  list: Item[];

  constructor() { }

  ngOnInit() {
  }

}
