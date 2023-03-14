import { MoviesService } from 'src/app/main/services/movies.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { PaginationService } from 'src/app/main/services/pagination.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';
import { ApiService } from 'src/app/shared/services/api.service';
import { TabPath } from 'src/app/main/enums/api.enum';
import { resultMoviesMock } from 'src/assets/mock/resultMovies.mock';

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
  let movieService: MoviesService;
  let apiService: ApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginationComponent],
      imports: [HttpClientModule],
      providers: [PaginationService, ApiService],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PaginationService);
    movieService = TestBed.inject(MoviesService);
    apiService = TestBed.inject(ApiService);
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

  it('check start with changePage', () => {
    const setPages = spyOn(service, 'setPages');
    const tab = spyOn(apiService, 'requestTabMovie').and.callFake(() => {
      return of(resultMoviesMock);
    });

    movieService.setCurrentTab(TabPath.popular);
    component.changePage(1);

    expect(setPages).toHaveBeenCalled();
    expect(tab).toHaveBeenCalled();

    movieService.setCurrentTab(TabPath.search);
    component.changePage(1);

    expect(tab).toHaveBeenCalled();
  });
});
