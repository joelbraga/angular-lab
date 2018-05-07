import { MusicService } from './shared/music.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-search (term)="searchTerm($event)"></app-search>
    <app-list [list]="list"></app-list>
    <!--<router-outlet></router-outlet>-->
  `,
  styles: []
})
export class AppComponent {

  list: Item[];

  constructor(private musicService: MusicService) {}

  searchTerm(term) {
    this.musicService.search(term)
      .subscribe(res => this.list = res);
  }
}
