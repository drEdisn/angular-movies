import { Api } from './../../main/enums/api.enum';
import { Observable, Subscriber } from 'rxjs';
import { ApiInterceptorService } from './api-interceptor.service';
import { TestBed } from '@angular/core/testing';
import { HttpRequest } from '@angular/common/http';

describe('ApiInterceptorService', () => {
  let service: ApiInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiInterceptorService);
  });

  it('should be created', () => {
    const next = {
      handle: () => {
        return Observable.create((subscriber: Subscriber<number>) => {
          subscriber.complete();
        });
      },
    };

    const requestMock = new HttpRequest('GET', '/test');

    service.intercept(requestMock, next).subscribe(() => {
      expect(requestMock.url).toEqual(`${Api.url}/test`);
    });

    const requestMock2 = new HttpRequest('GET', './assets');

    service.intercept(requestMock2, next).subscribe(() => {
      expect(requestMock2.url).toEqual('./assets');
    });
    expect(service).toBeTruthy();
  });
});
