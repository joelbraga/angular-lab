import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicService } from '../../shared/music.service';

@Component({
  selector: 'app-detail-song',
  template: `
  <div *ngFor="let item of results">
  <h4>{{item.track}}</h4>
  <div>{{item.artist}}</div>
  <img [src]="item.thumbnail" />
</div>
  `,
  styles: []
})
export class DetailSongComponent implements OnInit {

  results: any[];

  constructor(private activatedRoute: ActivatedRoute, private musicService: MusicService) { }

  ngOnInit() {
    this.activatedRoute.parent.params
      .switchMap(params => this.musicService.detail(params['id'], 'song'))
      .subscribe(result => this.results = result);
  }

}
