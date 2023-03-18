import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { MoviePageGuardService } from './movie-page-guard.service';

describe('MoviePageGuardService', () => {
  let service: MoviePageGuardService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviePageGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('check canActivate', () => {
    const createMockRoute = (id: string) => {
      return {
        params: { id: id },
      } as any;
    };
    router = TestBed.inject(Router);

    expect(service.canActivate(createMockRoute('0'))).toEqual(
      router.createUrlTree(['/page-not-found']),
    );

    expect(service.canActivate(createMockRoute('123456'))).toEqual(true);
  });
});
