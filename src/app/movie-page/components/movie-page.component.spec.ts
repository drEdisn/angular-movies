import { ActorCardComponent } from './actor-card/actor-card.component';
import { SharedModule } from './../../shared/shared.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePageComponent } from './movie-page.component';

describe('MoviePageComponent', () => {
  let component: MoviePageComponent;
  let fixture: ComponentFixture<MoviePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoviePageComponent, ActorCardComponent],
      imports: [SharedModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MoviePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
