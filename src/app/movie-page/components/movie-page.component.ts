import { ActorService } from 'src/app/actor-page/services/actor.service';
import { PopupService } from 'src/app/shared/services/popup.service';
import { MoviesService } from 'src/app/main/services/movies.service';
import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { BehaviorSubject, takeUntil, Subject } from 'rxjs';
import { Movie } from 'src/app/main/models/movie.model';
import { MovieImagePosters, MovieImages } from './../models/movie-images.model';
import { MovieCast } from 'src/app/movie-page/models/movie-cast.model';
import { ApiService } from 'src/app/shared/services/api.service';
import { ImageUrls } from 'src/app/main/enums/image-urls.enum';
import { MovieFullInfo } from '../models/movie-full-info.model';
import { MoviesSearchResult } from 'src/app/main/models/search-result.model';
import { MovieCredits } from '../models/movie-credits.model';
import { Genres } from 'src/app/main/models/genres.model';
import { ActivatedRoute, Params } from '@angular/router';
import { getImageUrl } from 'src/app/functions/check-image';
import { checkForZero } from 'src/app/functions/check-for-zero';
import { LanguageService } from 'src/app/main/services/language.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviePageComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public recommends$: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>(
    [],
  );
  public credits$: BehaviorSubject<MovieCast[]> = new BehaviorSubject<
    MovieCast[]
  >([]);
  public images$: BehaviorSubject<MovieImagePosters[]> = new BehaviorSubject<
    MovieImagePosters[]
  >([]);
  public movie: MovieFullInfo | null = null;
  public moviePosterPath: string = '';
  private id: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(
    private apiService: ApiService,
    private cdr: ChangeDetectorRef,
    private moviesService: MoviesService,
    private router: ActivatedRoute,
    public popupService: PopupService,
    private actorService: ActorService,
    public languageService: LanguageService,
    private translateService: TranslateService,
  ) {}

  public ngOnInit(): void {
    this.setId();
    this.getTranslateLangChenge();
  }

  private getTranslateLangChenge(): void {
    this.translateService.onLangChange
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.getAllRequests();
      });
  }

  public getImageUrl(path: string | null, isMovie = false): string {
    if (isMovie) {
      return getImageUrl(path, ImageUrls.emptyMovieImage);
    }

    return getImageUrl(path, ImageUrls.emptyImage);
  }

  public openPopup(path: string) {
    this.popupService.open(this.getImageUrl(path));
  }

  private setId(): void {
    this.router.params.subscribe((params: Params) => {
      this.id.next(params['id']);
      this.init();
    });
  }

  private getId(): number {
    return this.id.getValue();
  }

  private getAllRequests(): void {
    this.setGenres();
    this.setMovie();
    this.setCredits();
    this.setRecommends();
  }

  private init(): void {
    if (checkForZero(this.moviesService.genres.length)) {
      this.setGenres();
    }
    this.setMovie();
    this.setCredits();
    this.setImages();
    this.setRecommends();
  }

  public setGenres(): void {
    this.apiService
      .getGanres()
      .pipe(takeUntil(this.destroy$))
      .subscribe((genres: Genres) => {
        this.moviesService.genres.push(...genres.genres);
      });
  }

  private setMovie(): void {
    this.apiService
      .getMovie(this.getId())
      .pipe(takeUntil(this.destroy$))
      .subscribe((result: MovieFullInfo) => {
        this.movie = result;
        this.moviePosterPath = this.getImageUrl(result.posterPath);
        this.cdr.detectChanges();
      });
  }

  private setRecommends(): void {
    this.apiService
      .getMovieRecommends(this.getId())
      .pipe(takeUntil(this.destroy$))
      .subscribe((result: MoviesSearchResult) => {
        this.recommends$.next(result.results);
      });
  }

  private setCredits(): void {
    this.apiService
      .getMovieCredits(this.getId())
      .pipe(takeUntil(this.destroy$))
      .subscribe((result: MovieCredits) => {
        this.credits$.next(result.cast);
        this.actorService.setActorIds(result.cast.map((value) => value.id));
      });
  }

  private setImages(): void {
    this.apiService
      .getMovieImages(this.getId())
      .pipe(takeUntil(this.destroy$))
      .subscribe((result: MovieImages) => {
        const countOfImages: number = 8;
        this.images$.next(result.backdrops.splice(0, countOfImages));
      });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
