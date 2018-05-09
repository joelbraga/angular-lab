import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicService } from '../../shared/music.service';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-detail-entity',
  template: `
  <div *ngFor="let item of results">
  <h4>{{item[display]}}</h4>
  <div>{{item.artist}}</div>
  <img [src]="item.thumbnail" />
</div>
  `,
  styles: []
})
export class DetailEntityComponent implements OnInit {

  results: any[];
  display: string;

  constructor(private activatedRoute: ActivatedRoute, private musicService: MusicService) { }

  ngOnInit() {
    Observable.combineLatest(this.activatedRoute.parent.params, this.activatedRoute.data)
      .switchMap(res => {
        this.display = res[1].display;
        return this.musicService.detail(res[0].id, res[1].entity);
      })
      .subscribe(result => this.results = result);
  }

}
