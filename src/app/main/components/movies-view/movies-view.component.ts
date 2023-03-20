import { TranslateService } from '@ngx-translate/core';
import { MoviesSearchResult } from 'src/app/main/models/search-result.model';
import { Genres } from 'src/app/main/models/genres.model';
import { PaginationService } from 'src/app/main/services/pagination.service';
import { Movie } from 'src/app/main/models/movie.model';
import { ApiService } from 'src/app/shared/services/api.service';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subject, switchMap, takeUntil, Observable } from 'rxjs';
import { MoviesService } from 'src/app/main/services/movies.service';
import { TabPath } from 'src/app/main/enums/api.enum';
import { Section } from 'src/app/main/models/section.model';

@Component({
  selector: 'app-movies-view',
  templateUrl: './movies-view.component.html',
  styleUrls: ['./movies-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesViewComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public movies$: Observable<Movie[]> = this.moviesService.getMovies();
  public currentTab$: Observable<TabPath> = this.moviesService.getCurrentTab();
  public sections: Section[] = [
    { name: 'main.popular', tab: TabPath.popular },
    { name: 'main.top-rated', tab: TabPath.topRated },
    { name: 'main.upcoming', tab: TabPath.upcoming },
  ];

  constructor(
    private apiService: ApiService,
    public moviesService: MoviesService,
    private paginationService: PaginationService,
    private translateService: TranslateService,
  ) {}

  public ngOnInit(): void {
    this.init();
    this.getTranslateLangChange();
  }

  private getTranslateLangChange(): void {
    this.translateService.onLangChange
      .pipe(
        takeUntil(this.destroy$),
        switchMap(() => this.apiService.getGanres()),
        switchMap((genres: Genres) => {
          this.moviesService.genres = genres.genres;
          return this.getReturnValue(this.moviesService.getSearchValue());
        })
      )
      .subscribe((result: MoviesSearchResult) => {
        this.setMoviesAndPagination(result);
      });
  }

  private getReturnValue(searchValue: string): Observable<MoviesSearchResult> {
    if (searchValue) {
      return this.apiService.requestSearchMovie(
        searchValue,
        this.paginationService.getLocalPage(),
      );
    }
    return this.apiService.requestTabMovie(
      this.moviesService.getCurrentTabValue(),
      this.paginationService.getLocalPage(),
    );
  }

  private init(): void {
    this.apiService
      .getGanres()
      .pipe(
        takeUntil(this.destroy$),
        switchMap((genres: Genres) => {
          this.moviesService.genres = genres.genres;
          return this.apiService.requestTabMovie(
            this.moviesService.getCurrentTabValue(),
            this.paginationService.getLocalPage(),
          );
        }),
      )
      .subscribe((movies: MoviesSearchResult) => {
        this.setMoviesAndPagination(movies);
      });
  }

  public changeTab(tab: TabPath): void {
    this.setMovieServiceValues(tab, '');

    this.apiService
      .requestTabMovie(tab)
      .pipe(takeUntil(this.destroy$))
      .subscribe((movies: MoviesSearchResult) => {
        this.setMoviesAndPagination(movies);
      });
  }

  private setMovieServiceValues(tab: TabPath, value: string): void {
    this.moviesService.setCurrentTab(tab);
    this.moviesService.setSearchValue(value);
  }

  private setMoviesAndPagination(result: MoviesSearchResult): void {
    this.moviesService.setMovies(result.results);
    this.paginationService.setTotalPages(result.totalPages);
    this.paginationService.setPages(result.page);
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
