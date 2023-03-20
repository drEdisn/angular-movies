import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Lang } from '../enums/lang.enum';
import { LocalStore } from '../enums/localStore.enum';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private language$: BehaviorSubject<Lang> = new BehaviorSubject<Lang>(
    this.getLocalLang(),
  );

  public getLangValue(): Lang {
    return this.language$.getValue();
  }

  public getLang(): Observable<Lang> {
    return this.language$.asObservable();
  }

  public setLang(value: Lang): void {
    this.language$.next(value);
    this.setLocalLang(value);
  }

  private setLocalLang(value: Lang): void {
    localStorage.setItem(LocalStore.lang, value);
  }

  private getLocalLang(): Lang {
    return (localStorage.getItem(LocalStore.lang) as Lang) || Lang.en;
  }
}
