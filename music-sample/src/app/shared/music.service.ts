import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

@Injectable()
export class MusicService {

  apiRoot = 'https://itunes.apple.com/search';

  constructor(private http: HttpClient) {
  }

  search(term: string): Observable<Item[]> {
    const params = new HttpParams()
      .set('term', term)
      .set('media', 'music')
      .set('limit', '20');

    return this.http.get<ServerResponse>(this.apiRoot, { params })
      .retry(3)
      .map(res => {
        return res.results.map((item) => {
          return <Item>{
            track: item.trackName,
            artist: item.artistName,
            thumbnail: item.artworkUrl30,
            artistId: item.artistId
          };
        });
      });
  }

}
