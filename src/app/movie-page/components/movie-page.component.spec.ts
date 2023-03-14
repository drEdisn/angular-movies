import { HttpClientModule } from '@angular/common/http';
import { ActorCardComponent } from './actor-card/actor-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MoviePageComponent } from './movie-page.component';
import { ApiService } from 'src/app/shared/services/api.service';

describe('MoviePageComponent', () => {
  let component: MoviePageComponent;
  let fixture: ComponentFixture<MoviePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoviePageComponent, ActorCardComponent],
      imports: [SharedModule, HttpClientModule, RouterTestingModule],
      providers: [ApiService],
    }).compileComponents();

    fixture = TestBed.createComponent(MoviePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
