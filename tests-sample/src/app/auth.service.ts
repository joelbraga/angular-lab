import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient
  ) {}

  login(email: string, password: string): Observable<boolean> {
    return this.http.post(`auth/login`, { email, password })
      .switchMap((res: HttpResponse<Object>) => Observable.of(true))
      .catch((err: any) => Observable.of(false));
  }

}
