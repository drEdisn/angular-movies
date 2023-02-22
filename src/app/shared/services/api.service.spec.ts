import { movieArray } from './../../../assets/movieArray';
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
      return of({
        genres: [
          {
            name: '11',
            id: 12,
          },
        ],
      });
    });

    service.getGanres().subscribe((genre) => {
      expect(genre).toEqual({
        genres: [
          {
            name: '11',
            id: 12,
          },
        ],
      });
    });
    expect(genres).toHaveBeenCalled();
  });

  it('check popular', () => {
    const movies = spyOn(service, 'requestPopularMovie').and.callFake(() => {
      return of({
        page: 1,
        results: movieArray,
        total_results: 1000,
        total_pages: 200,
      });
    });

    service.requestPopularMovie().subscribe((movie) => {
      expect(movie).toEqual({
        page: 1,
        results: movieArray,
        total_results: 1000,
        total_pages: 200,
      });
    });
    expect(movies).toHaveBeenCalled();
  });
});
