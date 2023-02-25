import { Observable } from 'rxjs';
import { PaginationService } from 'src/app/main/services/pagination.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';

const chechCurrent = (current: Observable<number>, expectValue: number) => {
  current
    .subscribe((page) => {
      expect(page).toEqual(expectValue);
    })
    .unsubscribe();
};

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
    chechCurrent(component.currentPage$, 1);

    service.setPages(6);
    chechCurrent(component.currentPage$, 6);
  });
});
