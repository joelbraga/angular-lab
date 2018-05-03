import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  template: `
    <ng-content select=".content-title"></ng-content>
    <div *ngFor="let value of listValues | filter:termText">{{ value }}</div>
  `,
  styles: []
})
export class ContentComponent implements OnInit {

  @Input()
  termText: string;

  @Input()
  listValues: string;

  constructor() { }

  ngOnInit() {
  }

}
