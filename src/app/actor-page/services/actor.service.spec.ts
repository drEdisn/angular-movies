import { TestBed } from '@angular/core/testing';
import { ActorService } from './actor.service';

describe('ActorService', () => {
  let service: ActorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('check functions', () => {
    service.setActorIds([]);

    expect(service.getActorIds()).toEqual([]);

    service.setActorIds([1, 2]);

    expect(service.getActorIds()).toEqual([1, 2]);
  });
});
