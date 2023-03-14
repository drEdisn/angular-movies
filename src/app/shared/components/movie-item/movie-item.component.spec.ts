import { movieArrayMock } from 'src/assets/mock/movieArray.mock';
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
    service = TestBed.inject(MoviesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    const init = spyOn(component, 'ngOnInit');
    const changes = spyOn(component, 'ngOnChanges');

    component.ngOnInit();
    component.ngOnChanges();

    expect(changes).toHaveBeenCalled();
    expect(init).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('check properties', () => {
    service.genres = [{ name: '123', id: 28 }];
    component.movieItem = movieArrayMock[0];
    component.ngOnInit();
    component.genres$.subscribe((genres) => {
      expect(genres.length).toBe(1);
    });
  });

  it('check image', () => {
    component.ngOnChanges();
    expect(component.posterPath).toEqual(
      './assets/images/empty-movie-icon.png',
    );

    component.movieItem = movieArrayMock[0];
    component.ngOnChanges();

    expect(component.posterPath).toEqual(
      'https://image.tmdb.org/t/p/original/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
    );
  });
});
