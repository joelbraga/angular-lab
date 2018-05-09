import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule, HttpRequest, HttpParams } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
        AuthService,
      ]
    });
  });

  afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
    backend.verify();
  }));

  it(`should send an expected login request`, async(inject([AuthService, HttpTestingController],
    (service: AuthService, backend: HttpTestingController) => {
      service.login('foo@mail.com', 'bar').subscribe();

      backend.expectOne((req: HttpRequest<any>) => {
        return req.url === 'auth/login'
          && req.method === 'POST'
          && req.body.email === 'foo@mail.com'
          && req.body.password === 'bar';
      }, `POST to 'auth/login'`);
  })));

  it(`should emit 'false' for 401 Unauthorized`, async(inject([AuthService, HttpTestingController],
    (service: AuthService, backend: HttpTestingController) => {
      service.login('foo', 'bar').subscribe((next) => {
        expect(next).toBeFalsy();
      });

      backend.expectOne('auth/login').flush(null, { status: 401, statusText: 'Unauthorized' });
  })));

  it(`should emit 'true' for 200 Ok`, async(inject([AuthService, HttpTestingController],
    (service: AuthService, backend: HttpTestingController) => {
      service.login('foo', 'bar').subscribe((next) => {
        expect(next).toBeTruthy();
      });

      backend.expectOne('auth/login').flush(null, { status: 200, statusText: 'Ok' });
  })));
});
