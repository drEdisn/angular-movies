import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  public isOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public imageSrc: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public open(src: string): void {
    this.isOpen.next(true);
    this.imageSrc.next(src);
  }

  public close(): void {
    this.isOpen.next(false);
  }
}
