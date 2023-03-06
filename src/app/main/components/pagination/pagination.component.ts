import { MoviesSearchResult } from 'src/app/main/models/search-result.model';
import { ApiService } from 'src/app/shared/services/api.service';
import { MoviesService } from 'src/app/main/services/movies.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { PaginationService } from 'src/app/main/services/pagination.service';
import { TabPath } from 'src/app/main/enums/api.enum';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent implements OnDestroy {
  public pages$: Observable<number[]> = this.paginationService.getPages();
  public currentPage$: Observable<number> =
    this.paginationService.getCurrentPage();
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private paginationService: PaginationService,
    private moviesService: MoviesService,
    private apiService: ApiService,
  ) {}

  public changePage(page: number): void {
    this.paginationService.setPages(page);

    if (this.moviesService.getCurrentTabValue() === TabPath.search) {
      this.getSearchMoviePage(page);
    } else {
      this.getPopularMoviePage(page);
    }
  }

  private getSearchMoviePage(page: number): void {
    this.apiService
      .requestSearchMovie(this.moviesService.searchValue, page)
      .pipe(takeUntil(this.destroy$))
      .subscribe((movies: MoviesSearchResult) => {
        this.moviesService.setMovies(movies.results);
      });
  }

  private getPopularMoviePage(page: number): void {
    this.apiService
      .requestTabMovie(this.moviesService.getCurrentTabValue(), page)
      .pipe(takeUntil(this.destroy$))
      .subscribe((movies: MoviesSearchResult) => {
        this.moviesService.setMovies(movies.results);
      });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
