import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler } from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { Api } from 'src/app/main/enums/api.enum';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root',
})
export class ApiInterceptorService implements HttpInterceptor {

  constructor(
   private loaderService: LoaderService,
  ) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const assetsReg: RegExp = new RegExp('./assets');

    this.loaderService.openLoader();

    if (assetsReg.test(req.url)) {
      return next.handle(req);
    }

    const newRequest = req.clone({
      url: `${Api.url}${req.url}`,
      params: req.params.set('api_key', Api.api_key),
    });

    return next.handle(newRequest).pipe(
      finalize(() => { this.loaderService.closeLoader() }),
    );
  }
}
