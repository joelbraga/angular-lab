import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../shared/music.service';

@Component({
  selector: 'app-home',
  template: `
    <app-search (term)="searchTerm($event)"></app-search>
    <app-list [list]="list"></app-list>
  `,
  styles: []
})
export class HomeComponent {

  list: Item[];

  constructor(private musicService: MusicService) {}

  searchTerm(term) {
    this.musicService.search(term)
      .subscribe(res => this.list = res);
  }

}
