import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  template: `
    <div class="item" *ngFor="let item of list" (click)="goTo(item.artistId)">
      <h4>{{item.track}}</h4>
      <div>{{item.artist}}</div>
      <img [src]="item.thumbnail" />
    </div>
  `,
  styles: [`
    .item {
      border-style: solid;
      margin-bottom: 5px;
    }
  `]
})
export class ListComponent implements OnInit {

  @Input()
  list: Item[];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goTo(artistId: string) {
    this.router.navigate(['detail', artistId]);
  }

}
