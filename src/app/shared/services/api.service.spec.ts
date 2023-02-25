import { testMoviesMock, testGenresMock } from '../../../assets/mock/testData.mock';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

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
    const movies = spyOn(service, 'requestPopularMovie').and.callFake(() => {
      return of(testMoviesMock);
    });

    service.requestPopularMovie().subscribe((movie) => {
      expect(movie).toEqual(testMoviesMock);
    });
    expect(movies).toHaveBeenCalled();
  });
});
