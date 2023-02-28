import { testMoviesMock, testGenresMock } from 'src/assets/mock/testData.mock';
import { By } from '@angular/platform-browser';
import { movieArrayMock } from 'src/assets/mock/movieArray.mock';
import { of } from 'rxjs';
import { PaginationComponent } from './../pagination/pagination.component';
import { ApiService } from 'src/app/shared/services/api.service';
import { PaginationService } from 'src/app/main/services/pagination.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesService } from 'src/app/main/services/movies.service';

import { MoviesViewComponent } from './movies-view.component';

describe('MoviesViewComponent', () => {
  let component: MoviesViewComponent;
  let fixture: ComponentFixture<MoviesViewComponent>;
  let apiService: ApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler,
        MoviesService,
        PaginationService,
        ApiService,
      ],
      declarations: [MoviesViewComponent, PaginationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MoviesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const init = spyOn(component, 'ngOnInit');
    const destroy = spyOn(component, 'ngOnDestroy');

    component.ngOnInit();
    component.ngOnDestroy();
    expect(destroy).toHaveBeenCalled();
    expect(init).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('check init', () => {
    apiService = TestBed.inject(ApiService);

    const genres = spyOn(apiService, 'getGanres').and.callFake(() => {
      return of(testGenresMock);
    });

    const movies = spyOn(apiService, 'requestPopularMovie').and.callFake(() => {
      return of(testMoviesMock);
    });

    component.ngOnInit();
    expect(genres).toHaveBeenCalled();
    expect(movies).toHaveBeenCalled();

    component.movies$.subscribe((movie) => {
      expect(movie).toEqual(movieArrayMock);
    });
  });

  it('check sercions', () => {
    const elem = fixture.debugElement.queryAll(By.css('.sections__item'));
    const sections = ['Popular', 'Top-Rated', 'Upcoming'];

    elem.forEach((obj, ind) => {
      expect(obj.nativeElement.innerText).toEqual(sections[ind]);
    });
  });
});
