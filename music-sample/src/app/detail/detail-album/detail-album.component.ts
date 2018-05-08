import { Observable } from 'rxjs/Observable';
import { MusicService } from './../../shared/music.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';


@Component({
  selector: 'app-detail-album',
  template: `
    <div *ngFor="let item of results">
      <h4>{{item.album}}</h4>
      <div>{{item.artist}}</div>
      <img [src]="item.thumbnail" />
    </div>
  `,
  styles: []
})
export class DetailAlbumComponent implements OnInit {

  results: any[];

  constructor(private activatedRoute: ActivatedRoute, private musicService: MusicService) { }

  ngOnInit() {
    this.activatedRoute.parent.params
      .switchMap(params => this.musicService.detail(params['id'], 'album'))
      .subscribe(result => this.results = result);
  }

}
