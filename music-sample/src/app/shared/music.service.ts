import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/skip';

@Injectable()
export class MusicService {

  apiRoot = 'https://itunes.apple.com/';

  constructor(private http: HttpClient) {
  }

  search(term: string): Observable<Item[]> {
    const params = new HttpParams()
      .set('term', term)
      .set('media', 'music')
      .set('limit', '20');

    return this.http.get<ServerResponse>(`${this.apiRoot}/search`, { params })
      .retry(3)
      .map(res => {
        return res.results.map((item) => {
          return <Item>{
            album: item.collectionName,
            track: item.trackName,
            artist: item.artistName,
            thumbnail: item.artworkUrl30,
            artistId: item.artistId
          };
        });
      });
  }

  detail(id: string, entity: string): Observable<Item[]> {
    const params = new HttpParams()
      .set('id', id)
      .set('entity', entity);

    return this.http.get<ServerResponse>(`${this.apiRoot}/lookup`, { params })
      .retry(3)
      .map(res => {
        return res.results.map((item) => {
          return <Item>{
            album: item.collectionName,
            track: item.trackName,
            artist: item.artistName,
            thumbnail: item.artworkUrl60,
            artistId: item.artistId
          };
        });
      });
  }

}
