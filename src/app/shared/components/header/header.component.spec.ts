import { resultMoviesMock } from 'src/assets/mock/resultMovies.mock';
import { of } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';
import { PaginationService } from 'src/app/main/services/pagination.service';
import { MoviesService } from 'src/app/main/services/movies.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let moviesService: MoviesService;
  let apiService: ApiService;
  let paginationService: PaginationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [HttpClient, HttpHandler],
      imports: [
        CommonModule,
        TranslateModule.forRoot(),
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        ReactiveFormsModule,
        MatSelectModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    moviesService = TestBed.inject(MoviesService);
    paginationService = TestBed.inject(PaginationService);
    apiService = TestBed.inject(ApiService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('search', () => {
    const settab = spyOn(moviesService, 'setCurrentTab');
    const setMovies = spyOn(moviesService, 'setMovies');
    const setTotal = spyOn(paginationService, 'setTotalPages');
    const setPages = spyOn(paginationService, 'setPages');
    const search = spyOn(apiService, 'requestSearchMovie').and.callFake(() => {
      return of(resultMoviesMock);
    });

    component.searchForm.setValue({ searchValue: 'asdf' });
    component.search();

    expect(settab).toHaveBeenCalled();
    expect(search).toHaveBeenCalled();
    expect(setTotal).toHaveBeenCalled();
    expect(setMovies).toHaveBeenCalled();
    expect(setPages).toHaveBeenCalled();
    expect(moviesService.getSearchValue()).toEqual('asdf');
  });

  it('search 2 way', () => {
    const settab = spyOn(moviesService, 'setCurrentTab');
    const setMovies = spyOn(moviesService, 'setMovies');
    const setTotal = spyOn(paginationService, 'setTotalPages');
    const setPages = spyOn(paginationService, 'setPages');
    const popular = spyOn(apiService, 'requestTabMovie').and.callFake(() => {
      return of(resultMoviesMock);
    });

    component.searchForm.setValue({ searchValue: '' });
    component.search();

    expect(settab).toHaveBeenCalled();
    expect(setTotal).toHaveBeenCalled();
    expect(setMovies).toHaveBeenCalled();
    expect(setPages).toHaveBeenCalled();
    expect(popular).toHaveBeenCalled();
  });
});
