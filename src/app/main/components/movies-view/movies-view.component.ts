import { MoviesSearchResult } from 'src/app/main/models/search-result.model';
import { Genres } from 'src/app/main/models/genres.model';
import { PaginationService } from 'src/app/main/services/pagination.service';
import { Movie } from 'src/app/main/models/movie.model';
import { ApiService } from 'src/app/shared/services/api.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, switchMap, takeUntil } from 'rxjs';
import { MoviesService } from 'src/app/main/services/movies.service';

@Component({
  selector: 'app-movies-view',
  templateUrl: './movies-view.component.html',
  styleUrls: ['./movies-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesViewComponent implements OnInit {
  public movies$ = new BehaviorSubject<Movie[]>([]);
  public sections: string[] = ['Popular', 'Top-Rated', 'Upcoming'];
  private destroy$ = new Subject();

  constructor(
    private apiService: ApiService,
    private moviesService: MoviesService,
    private paginationService: PaginationService,
  ) {}

  public ngOnInit(): void {
    this.init();
  }

  private init(): void {
    this.apiService
      .getGanres()
      .pipe(
        takeUntil(this.destroy$),
        switchMap((genres: Genres) => {
          this.moviesService.genres.push(...genres.genres);
          return this.apiService.requestPopularMovie();
        }),
      )
      .subscribe((result: MoviesSearchResult) => {
        this.movies$.next(result.results);
        this.paginationService.setTotalPages(result.totalPages);
        this.paginationService.setPages(result.page);
      });
  }
}
