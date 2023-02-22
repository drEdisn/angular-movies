import { PaginationService } from './../../services/pagination.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;
  let service: PaginationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginationComponent],
      providers: [PaginationService],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PaginationService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('current page check', () => {
    component.currentPage$.subscribe(page => {
      expect(page).toEqual(1);
    }).unsubscribe();

    service.setPages(6);

    component.currentPage$.subscribe(page => {
      expect(page).toEqual(6);
    }).unsubscribe();
  });
});
