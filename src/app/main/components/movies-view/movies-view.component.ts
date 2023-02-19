import { PaginationService } from 'src/app/main/services/pagination.service';
import { Movie } from 'src/app/main/models/movie.model';
import { ApiService } from 'src/app/shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, switchMap, take } from 'rxjs';
import { MoviesService } from 'src/app/main/services/movies.service';

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
    this.init();
  }

  private init() {
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
        this.paginationService.setTotalPages(result.total_pages);
        this.paginationService.setPages(result.page);
      });
  }
}
