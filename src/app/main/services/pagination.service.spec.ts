import { PaginationService } from './pagination.service';
import { TestBed } from '@angular/core/testing';

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

    pages$.subscribe(p => {
      expect(p).toEqual([1]);
    }).unsubscribe();

    current$.subscribe(p => {
      expect(p).toEqual(1);
    }).unsubscribe();

    service.setPages(5);

    pages$.subscribe(p => {
      expect(p).toEqual([3, 4, 5, 6, 7]);
    }).unsubscribe();

    current$.subscribe(p => {
      expect(p).toEqual(5);
    }).unsubscribe();

    service.setPages(500);

    pages$.subscribe(p => {
      expect(p).toEqual([496, 497, 498, 499, 500]);
    }).unsubscribe();

    current$.subscribe(p => {
      expect(p).toEqual(500);
    }).unsubscribe();

    service.setPages(1);

    pages$.subscribe(p => {
      expect(p).toEqual([1, 2, 3, 4, 5]);
    }).unsubscribe();

    current$.subscribe(p => {
      expect(p).toEqual(1);
    }).unsubscribe();


    service.setPages(0);

    pages$.subscribe(p => {
      expect(p).toEqual([1, 2, 3, 4, 5]);
    }).unsubscribe();

    current$.subscribe(p => {
      expect(p).toEqual(1);
    }).unsubscribe();
  })


  it('check total pages', () => {

    expect(service.totalPages).toEqual(500);

    service.setTotalPages(100);
    
    expect(service.totalPages).toEqual(100);

    service.setTotalPages(600);

    expect(service.totalPages).toEqual(100);

    service.setTotalPages(0);

    expect(service.totalPages).toEqual(0);
  })
});