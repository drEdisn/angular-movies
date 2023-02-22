import { movieArray } from './../../../../assets/movieArray';
import { MoviesService } from 'src/app/main/services/movies.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieItemComponent } from './movie-item.component';

describe('MovieItemComponent', () => {
  let component: MovieItemComponent;
  let fixture: ComponentFixture<MovieItemComponent>;
  let service: MoviesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [MoviesService],
      declarations: [MovieItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieItemComponent);
    component = fixture.componentInstance;
    service = TestBed.get(MoviesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    const image = spyOn(component, 'getImage');
    const init = spyOn(component, 'ngOnInit');

    component.ngOnInit();
    component.getImage();

    expect(init).toHaveBeenCalled();
    expect(image).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('check properties', () => {
    service.genres = [{ name: '123', id: 28 }];
    component.movieItem = movieArray[0];
    component.ngOnInit();
    component.genres.subscribe((genres) => {
      expect(genres.length).toBe(1);
    });
  });
});
