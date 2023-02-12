import { PaginationService } from './../../services/pagination.service';
import { Movie } from './../../models/movie.model';
import { ApiService } from '../../../shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, switchMap, take } from 'rxjs';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies-view',
  templateUrl: './movies-view.component.html',
  styleUrls: ['./movies-view.component.scss'],
})
export class MoviesViewComponent implements OnInit {
  movies = new BehaviorSubject<Movie[]>([]);
  sections = ['Popular', 'Top-Rated', 'Upcoming'];

  constructor(
    private apiService: ApiService,
    private moviesService: MoviesService,
    private paginationService: PaginationService,
  ) {}

  ngOnInit() {
    this.getInit();
  }

  getInit() {
    this.apiService
      .getGanres()
      .pipe(
        take(1),
        switchMap((genres) => {
          this.moviesService.genres.push(...genres.genres);
          return this.apiService.requestPopularMovie();
        }),
      )
      .subscribe((result) => {
        this.movies.next(result.results);
        this.paginationService.setPages(5);
      });
  }
}
