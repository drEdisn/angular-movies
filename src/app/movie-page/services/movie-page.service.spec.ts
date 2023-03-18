import { TestBed } from '@angular/core/testing';
import { movieArrayMock } from 'src/assets/mock/movieArray.mock';
import { MoviePageService } from './movie-page.service';

describe('MoviePageService', () => {
  let service: MoviePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('check functions', () => {
    expect(service.getRecommendsValue()).toEqual([]);

    service.setRecommends(movieArrayMock);

    service.getRecommends().subscribe((movies) => {
      expect(movies).toEqual(movieArrayMock);
    });
  });
});
