import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private isOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public getIsOpenValue(): Observable<boolean> {
    return this.isOpen.asObservable();
  }

  public openLoader(): void {
    this.isOpen.next(true);
  }

  public closeLoader(): void {
    this.isOpen.next(false);
  }
}
