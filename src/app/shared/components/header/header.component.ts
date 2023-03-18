import { LanguageService } from './../../../main/services/language.service';
import { MoviesService } from 'src/app/main/services/movies.service';
import { PaginationService } from 'src/app/main/services/pagination.service';
import { ApiService } from 'src/app/shared/services/api.service';
import {
  Component,
  ChangeDetectionStrategy,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MoviesSearchResult } from 'src/app/main/models/search-result.model';
import { TabPath } from 'src/app/main/enums/api.enum';
import { Subject, takeUntil, Observable } from 'rxjs';
import { checkForZero } from 'src/app/functions/check-for-zero';
import { TranslateService } from '@ngx-translate/core';
import { Lang } from 'src/app/main/enums/lang.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnDestroy, OnInit {
  public currentLangValue: Observable<Lang> = this.languageService.getLang();
  private destroy$: Subject<void> = new Subject<void>();
  public searchForm: FormGroup = this.fb.group({
    searchValue: [''],
  });

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private paginationService: PaginationService,
    private moviesService: MoviesService,
    private translateService: TranslateService,
    private languageService: LanguageService,
  ) {}

  public ngOnInit(): void {
    const lang: Lang = this.languageService.getLangValue();
    this.translateService.use(lang);
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  public changeLanguage(event: Event): void {
    const element: HTMLElement = event.target as HTMLElement;
    const lang: Lang = (element.dataset['value'] || Lang.en) as Lang;

    this.languageService.setLang(lang);
    this.translateService.use(lang);
  }

  public search(): void {
    const requestQuery: string = this.searchForm.value.searchValue;

    if (checkForZero(requestQuery.length)) {
      this.getPopularMovie();
    } else {
      this.getSearchMovie(requestQuery);
    }
  }

  private getSearchMovie(requestQuery: string): void {
    this.setRequestSetting(TabPath.search, requestQuery);

    this.apiService
      .requestSearchMovie(requestQuery)
      .pipe(takeUntil(this.destroy$))
      .subscribe((result: MoviesSearchResult) => {
        this.setMoviesAndPagination(result);
      });
  }

  private getPopularMovie(): void {
    this.setRequestSetting(TabPath.popular);

    this.apiService
      .requestTabMovie(TabPath.popular)
      .pipe(takeUntil(this.destroy$))
      .subscribe((result: MoviesSearchResult) => {
        this.setMoviesAndPagination(result);
      });
  }

  private setRequestSetting(path: TabPath, requestQuery: string = ''): void {
    this.moviesService.setCurrentTab(path);
    this.moviesService.searchValue = requestQuery;
  }

  private setMoviesAndPagination(result: MoviesSearchResult): void {
    this.moviesService.setMovies(result.results);
    this.paginationService.setTotalPages(result.totalPages);
    this.paginationService.setPages(result.page);
  }
}
