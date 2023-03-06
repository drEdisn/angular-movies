import { testMoviesMock, testGenresMock } from 'src/assets/mock/testData.mock';
import { By } from '@angular/platform-browser';
import { movieArrayMock } from 'src/assets/mock/movieArray.mock';
import { of } from 'rxjs';
import { PaginationComponent } from 'src/app/main/components/pagination/pagination.component';
import { ApiService } from 'src/app/shared/services/api.service';
import { PaginationService } from 'src/app/main/services/pagination.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesService } from 'src/app/main/services/movies.service';

import { MoviesViewComponent } from './movies-view.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TabPath } from 'src/app/main/enums/api.enum';

describe('MoviesViewComponent', () => {
  let component: MoviesViewComponent;
  let fixture: ComponentFixture<MoviesViewComponent>;
  let apiService: ApiService;
  let moviesService: MoviesService;

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
      imports: [SharedModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MoviesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    moviesService = TestBed.inject(MoviesService);
    apiService = TestBed.inject(ApiService);
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
    const genres = spyOn(apiService, 'getGanres').and.callFake(() => {
      return of(testGenresMock);
    });

    const movies = spyOn(apiService, 'requestTabMovie').and.callFake(() => {
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
    const sections = ['Popular', 'Top Rated', 'Upcoming'];

    elem.forEach((obj, ind) => {
      expect(obj.nativeElement.innerText).toEqual(sections[ind]);
    });
  });

  it('change tab active', () => {
    const change = spyOn(moviesService, 'setCurrentTab');
    const tab = spyOn(apiService, 'requestTabMovie').and.callFake(() => {
      return of(testMoviesMock);
    });

    component.changeTab(TabPath.search);

    expect(change).toHaveBeenCalled();
    expect(tab).toHaveBeenCalled();
  });

  it('check movieService values', () => {
    spyOn(apiService, 'requestTabMovie').and.callFake(() => {
      return of(testMoviesMock);
    });

    component.changeTab(TabPath.search);

    moviesService.getCurrentTab().subscribe((val) => {
      expect(val).toEqual(TabPath.search);
    });
    moviesService.getMovies().subscribe((val) => {
      expect(val).toEqual(testMoviesMock.results);
    });
  });
});
