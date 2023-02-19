import { Pages } from './../models/pagination.model';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { PaginationConst } from '../enums/pagination.enum';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  pages = new BehaviorSubject<number[]>([1]);
  currentPage = new BehaviorSubject(1);
  totalPages = PaginationConst.max;

  getCurrentPage() {
    return this.currentPage.asObservable();
  }

  getPages() {
    return this.pages.asObservable();
  }

  setPages(page: number) {
    const { maxPage, minPage } = this.getMaxMinPages(page);
    const pages: number[] = [];

    for (let i = minPage; i <= maxPage; i += 1) {
      pages.push(i);
    }

    this.pages.next(pages);
    this.currentPage.next(page);
  }

  setTotalPages(value: number) {
    if (this.totalPages < value) {
      this.totalPages = value;
    }
  }

  private getMaxMinPages(page: number): Pages {
    const pages: Pages = {
      maxPage: page + PaginationConst.two,
      minPage: page - PaginationConst.two,
    };

    if (page <= PaginationConst.three) {
      pages.maxPage = PaginationConst.quantityPages;
      pages.minPage = PaginationConst.min;
    }
    if (page >= PaginationConst.premax) {
      pages.maxPage = this.totalPages;
      pages.minPage = this.totalPages - PaginationConst.four;
    }
    return pages;
  }
}
