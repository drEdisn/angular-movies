import { convertApiResultToResult } from 'src/app/main/models/converters/convertApiResultToResult';
import { testMoviesApiMock } from 'src/assets/mock/testData.mock';
import { testMoviesMock, testGenresMock } from 'src/assets/mock/testData.mock';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import {
  convertMovieApiToMovie,
  setMovies,
} from 'src/app/main/models/converters/convertMovieApiToMovie';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('check genres', () => {
    const genres = spyOn(service, 'getGanres').and.callFake(() => {
      return of(testGenresMock);
    });

    service.getGanres().subscribe((genre) => {
      expect(genre).toEqual(testGenresMock);
    });
    expect(genres).toHaveBeenCalled();
  });

  it('check popular', () => {
    const movies = spyOn(service, 'requestTabMovie').and.callFake(() => {
      return of(testMoviesMock);
    });

    service.requestTabMovie().subscribe((movie) => {
      expect(movie).toEqual(testMoviesMock);
    });
    expect(movies).toHaveBeenCalled();
  });

  it('check converter', () => {
    const newMock = convertApiResultToResult(testMoviesApiMock);

    expect(newMock).toEqual(testMoviesMock);

    const movieMock = convertMovieApiToMovie(testMoviesApiMock.results[0]);

    expect(movieMock).toEqual(testMoviesMock.results[0]);

    const movies = testMoviesApiMock.results;

    expect(setMovies(movies)).toEqual(testMoviesMock.results);

    expect(setMovies()).toEqual([]);
  });
});
