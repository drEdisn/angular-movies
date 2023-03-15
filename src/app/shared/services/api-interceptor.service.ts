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
import { LanguagesApi } from 'src/app/main/enums/lang.enum';

@Injectable({
  providedIn: 'root',
})
export class ApiInterceptorService implements HttpInterceptor {
  constructor(
    private loaderService: LoaderService,
    private languageService: LanguageService,
  ) {}

  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const assetsReg: RegExp = new RegExp('./assets');
    const language = this.languageService.getLangValue();

    this.loaderService.openLoader();

    if (assetsReg.test(req.url)) {
      return next.handle(req).pipe(
        finalize(() => {
          this.loaderService.closeLoader();
        })
      );
    }

    req.params.set('api_key', Api.api_key);
    let newRequest;
    if (!req.url.endsWith('/images')) {
      newRequest = req.clone({
        url: `${Api.url}${req.url}`,
        setParams: {
          'api_key': Api.api_key,
          'language': LanguagesApi[language]
        }
      })
    } else {
      newRequest = req.clone({
        url: `${Api.url}${req.url}`,
        params: req.params.set('api_key', Api.api_key)
      })
    }


    return next.handle(newRequest).pipe(
      finalize(() => {
        this.loaderService.closeLoader();
      }),
    );
  }
}
