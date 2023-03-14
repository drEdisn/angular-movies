import { LocalStore } from './../enums/localStore.enum';
import { Pages } from 'src/app/main/models/pagination.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { PaginationConst } from '../enums/pagination.enum';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  private pages$: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([
    1,
  ]);
  private currentPage$: BehaviorSubject<number> = new BehaviorSubject<number>(
    this.getLocalPage(),
  );
  public totalPages: number = PaginationConst.max;

  public getCurrentPage(): Observable<number> {
    return this.currentPage$.asObservable();
  }

  public setLocalPage(page: number): void {
    localStorage.setItem(LocalStore.page, `${page}`);
  }

  public getLocalPage(): number {
    const page: number = Number(localStorage.getItem(LocalStore.page));
    return page || 1;
  }

  public getPages(): Observable<number[]> {
    return this.pages$.asObservable();
  }

  public setPages(page: number): void {
    const { maxPage, minPage } = this.getMaxMinPages(page);
    const pages: number[] = [];

    for (let i = minPage; i <= maxPage; i += 1) {
      pages.push(i);
    }

    this.pages$.next(pages);
    this.currentPage$.next(page || PaginationConst.min);
    this.setLocalPage(page);
  }

  public setTotalPages(value: number): void {
    this.totalPages =
      value <= PaginationConst.max ? value : PaginationConst.max;
  }

  private getMaxMinPages(page: number): Pages {
    const pages: Pages = {
      maxPage: page + PaginationConst.two,
      minPage: page - PaginationConst.two,
    };

    if (this.totalPages <= PaginationConst.quantityPages) {
      pages.maxPage = this.totalPages;
      pages.minPage = PaginationConst.min;
      return pages;
    }

    if (page <= PaginationConst.three) {
      pages.maxPage = PaginationConst.quantityPages;
      pages.minPage = PaginationConst.min;
    }
    if (page >= this.totalPages - PaginationConst.three) {
      pages.maxPage = this.totalPages;
      pages.minPage = this.totalPages - PaginationConst.four;
    }
    return pages;
  }
}
