import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ActorService } from './actor.service';
import { ActrosGuardService } from './actors-guard.service';

describe('ActrosGuardService', () => {
  let service: ActrosGuardService;
  let actorService: ActorService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActrosGuardService);
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
    actorService = TestBed.inject(ActorService);

    expect(service.canActivate(createMockRoute('0'))).toEqual(
      router.createUrlTree(['/page-not-found']),
    );

    actorService.setActorIds([1]);

    expect(service.canActivate(createMockRoute('1'))).toEqual(true);
  });
});
