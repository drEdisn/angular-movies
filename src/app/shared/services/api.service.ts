import { Observable, map } from 'rxjs';
import { SearchResultAPI } from 'src/app/main/models/search-result.model';
import { MoviesSearchResult } from 'src/app/main/models/search-result.model';
import { Genres } from 'src/app/main/models/genres.model';
import { Api } from 'src/app/main/enums/api.enum';
import { MovieFullInfo, MovieFullInfoApi } from 'src/app/movie-page/models/movie-full-info.model';
import { MovieCredits } from 'src/app/movie-page/models/movie-credits.model';
import { MovieImages } from 'src/app/movie-page/models/movie-images.model';
import { MovieApi } from 'src/app/main/enums/api.enum';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { convertApiResultToResult } from 'src/app/main/models/converters/convertApiResultToResult';
import { convertFulMovieInfoToMovie } from 'src/app/movie-page/models/converters/convertFullMovieInfoToMovie';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public requestPopularMovie(page = 1): Observable<MoviesSearchResult> {
    return this.http.get<SearchResultAPI>(`${MovieApi.movie}${MovieApi.popular}?page=${page}`)
      .pipe(map((res: SearchResultAPI) => {
        return convertApiResultToResult(res);
      }));
  }

  public requestSearchMovie(
    query: string,
    page = 1,
  ): Observable<MoviesSearchResult> {
    return this.http.get<MoviesSearchResult>(
      `${Api.seatchMovie}?query=${query}&page=${page}`,
    );
  }

  public getGanres(): Observable<Genres> {
    return this.http.get<Genres>(Api.genre);
  }

  public getMovie(id: number): Observable<MovieFullInfo> {
    return this.http.get<MovieFullInfoApi>(`${MovieApi.movie}${id}`)
      .pipe(map((movie: MovieFullInfoApi) => {
        return convertFulMovieInfoToMovie(movie);
      }));
  }

  public getMovieImages(id: number): Observable<MovieImages> {
    return this.http.get<MovieImages>(`${MovieApi.movie}${id}${MovieApi.images}`);
  }

  public getMovieCredits(id: number): Observable<MovieCredits> {
    return this.http.get<MovieCredits>(`${MovieApi.movie}${id}${MovieApi.credits}`);
  }

  public getMovieRecommends(id: number): Observable<MoviesSearchResult> {
    return this.http.get<SearchResultAPI>(`${MovieApi.movie}${id}${MovieApi.recommends}`)
      .pipe(map((res: SearchResultAPI) => {
        return convertApiResultToResult(res);
      }));
  }
}
