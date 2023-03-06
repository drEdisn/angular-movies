import { Observable } from 'rxjs';
import { PaginationService } from './pagination.service';
import { TestBed } from '@angular/core/testing';

const testPages = (
  pages$: Observable<number[]>,
  expectPagesValue: number[],
  current$: Observable<number>,
  expectCurrentValue: number,
) => {
  pages$
    .subscribe((p) => {
      expect(p).toEqual(expectPagesValue);
    })
    .unsubscribe();

  current$
    .subscribe((p) => {
      expect(p).toEqual(expectCurrentValue);
    })
    .unsubscribe();
};

describe('PaginationService', () => {
  let service: PaginationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaginationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('check pages', () => {
    const pages$ = service.getPages();
    const current$ = service.getCurrentPage();

    service.setTotalPages(1);
    service.setPages(1);
    testPages(pages$, [1], current$, 1);

    service.setTotalPages(500);
    service.setPages(5);
    testPages(pages$, [3, 4, 5, 6, 7], current$, 5);

    service.setPages(500);
    testPages(pages$, [496, 497, 498, 499, 500], current$, 500);

    service.setPages(1);
    testPages(pages$, [1, 2, 3, 4, 5], current$, 1);

    service.setPages(0);
    testPages(pages$, [1, 2, 3, 4, 5], current$, 1);
  });

  it('check total pages', () => {
    expect(service.totalPages).toEqual(500);

    service.setTotalPages(100);

    expect(service.totalPages).toEqual(100);

    service.setTotalPages(600);

    expect(service.totalPages).toEqual(500);

    service.setTotalPages(0);

    expect(service.totalPages).toEqual(0);
  });
});
