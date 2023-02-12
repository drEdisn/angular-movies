import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class PaginationService {
  pages = new BehaviorSubject<number[]>([1]);

  setPages(totalPages: number) {
    const pages: number[] = [];
    for (let i = 1; i <= totalPages; i += 1) {
      pages.push(i);
    }
    this.pages.next(pages);
  }
}
