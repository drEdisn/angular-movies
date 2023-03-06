import { convertPersonImageApiToImage } from 'src/app/actor-page/models/converters/convertPersonImageApiToImage';
import { convertPersonCreditsToMovie } from 'src/app/actor-page/models/converters/convertPersonCreditsToMovie';
import { convertPersonApiToPerson } from 'src/app/actor-page/models/converters/convertPersonApiToPerson';
import {
  fullMovie,
  fullMovieApi,
  testImages,
  testImagesApi,
  testPersonApi,
  testCreditsApi,
  testImagePersonApi,
  testImagePerson,
  testPerson,
  testCredits,
} from 'src/assets/mock/testData.mock';
import { convertImagesApiToImages } from 'src/app/movie-page/models/converters/convertImagesApiToImages';
import { convertFulMovieInfoToMovie } from 'src/app/movie-page/models/converters/convertFullMovieInfoToMovie';
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

  it('check converters', () => {
    const movie = convertApiResultToResult(testMoviesApiMock);
    expect(movie).toEqual(testMoviesMock);

    const fullmovie = convertFulMovieInfoToMovie(fullMovieApi);
    expect(fullmovie).toEqual(fullMovie);

    const images = convertImagesApiToImages(testImagesApi);
    expect(images).toEqual(testImages);

    const person = convertPersonApiToPerson(testPersonApi);
    expect(person).toEqual(testPerson);

    const personCredits = convertPersonCreditsToMovie(testCreditsApi);
    expect(personCredits).toEqual(testCredits);

    const personImages = convertPersonImageApiToImage(testImagePersonApi);
    expect(personImages).toEqual(testImagePerson);
  });
});
