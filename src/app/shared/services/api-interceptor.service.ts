import { LanguageService } from 'src/app/main/services/language.service';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpEvent,
  HttpHandler,
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { Api } from 'src/app/main/enums/api.enum';
import { LoaderService } from './loader.service';
import { Lang, LanguagesApi } from 'src/app/main/enums/lang.enum';

@Injectable({
  providedIn: 'root',
})
export class ApiInterceptorService implements HttpInterceptor {
  private lastLanguage: Lang = this.languageService.getLangValue();

  constructor(
    private loaderService: LoaderService,
    private languageService: LanguageService,
  ) {}

  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    this.loaderService.openLoader();

    const assetsReg: RegExp = new RegExp('./assets');
    if (assetsReg.test(req.url)) {
      return next.handle(req).pipe(
        finalize(() => {
          this.loaderService.closeLoader();
        })
      );
    }

    const newRequest = this.setNewRequest(req);
    return next.handle(newRequest).pipe(
      finalize(() => {
        this.loaderService.closeLoader();
      }),
    );
  }

  private setNewRequest(req: HttpRequest<any>) {
    this.lastLanguage = this.languageService.getLangValue();
    if (!req.url.endsWith('/images')) {
      return req.clone({
        url: `${Api.url}${req.url}`,
        setParams: {
          'api_key': Api.api_key,
          'language': LanguagesApi[this.lastLanguage]
        }
      })
    }
    return req.clone({
      url: `${Api.url}${req.url}`,
      params: req.params.set('api_key', Api.api_key)
    })
  }
}
