import { perosonCreditsMock, perosonCreditsMockApi } from 'src/assets/mock/personCredits.mock';
import { personImageMock, personImageMockApi } from 'src/assets/mock/personImage.mock';
import { personMockApi, personMock } from 'src/assets/mock/person.mock';
import { movieImagesMockApi, movieImagesMock } from 'src/assets/mock/movieImages.mock';
import * as converts from 'src/assets/mock/index-converters';
import { resultMoviesApiMock, resultMoviesMock, genresMock } from 'src/assets/mock/resultMovies.mock';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import {
  convertMovieApiToMovie,
  setMovies,
} from 'src/app/main/models/converters/convertMovieApiToMovie';
import { fullMovieMock, fullMovieMockApi } from 'src/assets/mock/fullMovie.mock';

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
      return of(genresMock);
    });

    service.getGanres().subscribe((genre) => {
      expect(genre).toEqual(genresMock);
    });
    expect(genres).toHaveBeenCalled();
  });

  it('check popular', () => {
    const movies = spyOn(service, 'requestTabMovie').and.callFake(() => {
      return of(resultMoviesMock);
    });

    service.requestTabMovie().subscribe((movie) => {
      expect(movie).toEqual(resultMoviesMock);
    });
    expect(movies).toHaveBeenCalled();
  });

  it('check converter', () => {
    const newMock = converts.convertApiResultToResult(resultMoviesApiMock);

    expect(newMock).toEqual(resultMoviesMock);

    const movieMock = convertMovieApiToMovie(resultMoviesApiMock.results[0]);

    expect(movieMock).toEqual(resultMoviesMock.results[0]);

    const movies = resultMoviesApiMock.results;

    expect(setMovies(movies)).toEqual(resultMoviesMock.results);

    expect(setMovies()).toEqual([]);
  });

  it('check converters', () => {
    const movie = converts.convertApiResultToResult(resultMoviesApiMock);
    expect(movie).toEqual(resultMoviesMock);

    const fullmovie = converts.convertFulMovieInfoToMovie(fullMovieMockApi);
    expect(fullmovie).toEqual(fullMovieMock);

    const images = converts.convertImagesApiToImages(movieImagesMockApi);
    expect(images).toEqual(movieImagesMock);

    const person = converts.convertPersonApiToPerson(personMockApi);
    expect(person).toEqual(personMock);

    const personCredits = converts.convertPersonCreditsToMovie(perosonCreditsMockApi);
    expect(personCredits).toEqual(perosonCreditsMock);

    const personImages = converts.convertPersonImageApiToImage(personImageMockApi);
    expect(personImages).toEqual(personImageMock);
  });
});
