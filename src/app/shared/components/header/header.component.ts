import { MoviesService } from 'src/app/main/services/movies.service';
import { PaginationService } from 'src/app/main/services/pagination.service';
import { ApiService } from 'src/app/shared/services/api.service';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MoviesSearchResult } from 'src/app/main/models/search-result.model';
import { TabPath } from 'src/app/main/enums/api.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public searchForm: FormGroup = this.fb.group({
    searchValue: [''],
  });

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private paginationService: PaginationService,
    private moviesService: MoviesService,
  ) {}

  public search(): void {
    const requestQuery: string = this.searchForm.value.searchValue;

    if (requestQuery.length === 0) {
      this.getPopularMovie();
    } else {
      this.getSearchMovie(requestQuery);
    }
  }

  private getSearchMovie(requestQuery: string): void {
    this.moviesService.setCurrentTab(TabPath.search);
    this.moviesService.searchValue = requestQuery;

    this.apiService
      .requestSearchMovie(requestQuery)
      .subscribe((result: MoviesSearchResult) => {
        this.setMoviesAndPagination(result);
      });
  }

  private getPopularMovie(): void {
    this.moviesService.setCurrentTab(TabPath.popular);

    this.apiService
      .requestTabMovie(TabPath.popular)
      .subscribe((result: MoviesSearchResult) => {
        this.setMoviesAndPagination(result);
      });
  }

  private setMoviesAndPagination(result: MoviesSearchResult): void {
    this.moviesService.setMovies(result.results);
    this.paginationService.setTotalPages(result.totalPages);
    this.paginationService.setPages(result.page);
  }
}
