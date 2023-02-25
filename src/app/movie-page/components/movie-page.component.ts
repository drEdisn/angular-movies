import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { mergeMap, forkJoin, BehaviorSubject, Observable } from 'rxjs';
import { Movie } from 'src/app/main/models/movie.model';
import { movieArrayMock } from 'src/assets/mock/movieArray.mock';
import { MovieCredits } from './../models/movie-credits.model';
import { MovieImages, MovieImagePosters } from './../models/movie-images.model';
import { Genres } from './../../main/models/genres.model';
import { Cast } from './../../actor-page/models/cast.model';
import { ApiService } from 'src/app/shared/services/api.service';
import { MoviesSearchResult } from 'src/app/main/models/search-result.model';
import { ImageUrls } from 'src/app/main/enums/image-urls.enum';
import { MovieFullInfo } from '../models/movie-full-info.model';


type AllType = (Observable<Genres> | Observable<MovieImages> | Observable<MovieCredits> | Observable<MoviesSearchResult>)[];

const EmptyMovie: MovieFullInfo = {
  adult: false,
  backdrop_path: null,
  belongs_to_collection: null,
  budget: 0,
  genres: [],
  homepage: null,
  id: 0,
  imdb_id: 0,
  original_language: '',
  original_title: '',
  overview: '',
  popularity: 0,
  poster_path: null,
  production_companies: [],
  prouction_countries: [],
  release_date: '',
  revenue: 0,
  runtime: 0,
  spoken_languages: [],
  status: '',
  tagline: null,
  title: '',
  video: false,
  vote_average: 0,
  vote_count: 0,
}

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviePageComponent implements OnInit {
  public movie: MovieFullInfo = EmptyMovie;
  public recommends  = new BehaviorSubject<Movie[]>([]);
  public credits = new BehaviorSubject<Cast[]>([]);
  public images = new BehaviorSubject<MovieImagePosters[]>([]);
  public movieArray: Movie[] = movieArrayMock;

  
  @Input() id: number = 267805;

  constructor(
    private apiService: ApiService,
  ) {}

  public ngOnInit(): void {
    this.init();
  }

  public getImageUrl(path: string | null): string {
    return ImageUrls.imageUrl + path;
  }

  private init(): void {
    this.apiService.getMovie(this.id)
      .pipe(
        mergeMap(movie => {
          this.movie = movie;
          console.log(this.movie);
          const requestArray: AllType = [
            this.apiService.getMovieImages(this.id),
            this.apiService.getMovieCredits(this.id),
            this.apiService.getMovieRecommends(this.id)
          ];
          return forkJoin(requestArray);
        })
      )
      .subscribe((result) => {
        this.images.next((result[0] as MovieImages).backdrops);
        this.credits.next((result[1] as MovieCredits).cast);
        this.recommends.next((result[2] as MoviesSearchResult).results);
        // console.log(result);
      });
  }
}
