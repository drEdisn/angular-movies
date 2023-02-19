import { PaginationComponent } from './../pagination/pagination.component';
import { ApiService } from 'src/app/shared/services/api.service';
import { PaginationService } from 'src/app/main/services/pagination.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesService } from 'src/app/main/services/movies.service';

import { MoviesViewComponent } from './movies-view.component';

describe('MoviesViewComponent', () => {
  let component: MoviesViewComponent;
  let fixture: ComponentFixture<MoviesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler,
        MoviesService,
        PaginationService,
        ApiService,
      ],
      declarations: [MoviesViewComponent, PaginationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MoviesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});