import { PopupService } from './../services/popup.service';
import { MoviesService } from 'src/app/main/services/movies.service';
import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { BehaviorSubject, takeUntil, Subject } from 'rxjs';
import { Movie } from 'src/app/main/models/movie.model';
import { MovieImagePosters, MovieImages } from './../models/movie-images.model';
import { Cast } from 'src/app/actor-page/models/cast.model';
import { ApiService } from 'src/app/shared/services/api.service';
import { ImageUrls } from 'src/app/main/enums/image-urls.enum';
import { MovieFullInfo } from '../models/movie-full-info.model';
import { MoviesSearchResult } from 'src/app/main/models/search-result.model';
import { MovieCredits } from '../models/movie-credits.model';
import { Genres } from 'src/app/main/models/genres.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviePageComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public recommends$: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);
  public credits$: BehaviorSubject<Cast[]> = new BehaviorSubject<Cast[]>([]);
  public images$: BehaviorSubject<MovieImagePosters[]> = new BehaviorSubject<MovieImagePosters[]>([]);
  public movie: MovieFullInfo | null = null;
  public moviePosterPath: string = '';
  private id: number = 0;

  constructor(
    private apiService: ApiService,
    private cdr: ChangeDetectorRef,
    private moviesService: MoviesService,
    private router: ActivatedRoute,
    public popupService: PopupService,
  ) {}

  public ngOnInit(): void {
    this.init();
  }

  public getImageUrl(path: string | null, isMovie = false): string {
    if (path) {
      return ImageUrls.imageUrl + path;
    }
    if (isMovie) {
      return ImageUrls.define + ImageUrls.emptyMovieImage;
    }

    return ImageUrls.define + ImageUrls.emptyImage;
  }

  public openPopup(path: string) {
    this.popupService.open(this.getImageUrl(path));
  }

  private setId(): void {
    this.id = this.router.snapshot.params['id'];
  }

  private init(): void {
    this.setId();
    if (this.moviesService.genres.length === 0) {
      this.setGenres();
    }
    this.setMovie();
    this.setCredits();
    this.setImages();
    this.setRecommends();
  }

  public setGenres(): void {
    this.apiService.getGanres().subscribe((genres: Genres) => {
      this.moviesService.genres.push(...genres.genres);
    })
  }

  private setMovie(): void {
    this.apiService.getMovie(this.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((result: MovieFullInfo) => {
        this.movie = result;
        this.moviePosterPath = this.getImageUrl(result.posterPath);
        this.cdr.detectChanges();
      });
  }

  private setRecommends(): void {
    this.apiService.getMovieRecommends(this.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((result: MoviesSearchResult) => {
        this.recommends$.next(result.results);
      });
  }

  private setCredits(): void {
    this.apiService.getMovieCredits(this.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((result: MovieCredits) => {
        this.credits$.next(result.cast);
      });
  }

  private setImages(): void {
    this.apiService.getMovieImages(this.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((result: MovieImages) => {
        this.images$.next(result.backdrops.splice(0, 8));
      });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
