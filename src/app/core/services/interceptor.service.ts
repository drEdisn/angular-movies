import { Injectable } from '@angular/core';
import { HttpInterceptor ,HttpRequest, HttpEvent, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Api } from 'src/app/movies/models/enums';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.url !== './assets/i18n/en.json') {
      const newRequest = req.clone({
        url: `${Api.url}${req.url}&api_key=${Api.api_key}`,
      });
      return next.handle(newRequest);
    }

    return next.handle(req);
  }
}