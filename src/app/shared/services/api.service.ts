import { MovieFullInfo } from './../../movie-page/models/movie-full-info.model';
import { MovieCredits } from './../../movie-page/models/movie-credits.model';
import { MovieImages } from './../../movie-page/models/movie-images.model';
import { MovieApi } from './../../main/enums/api.enum';
import { Genres } from '../../main/models/genres.model';
import { MoviesSearchResult } from '../../main/models/search-result.model';
import { Api } from '../../main/enums/api.enum';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  requestPopularMovie(page = 1) {
    return this.http.get<MoviesSearchResult>(`${MovieApi.movie}${MovieApi.popular}?page=${page}`);
  }

  requestSearchMovie(query: string, page = 1) {
    return this.http.get<MoviesSearchResult>(
      `${Api.seatchMovie}?query=${query}&page=${page}`,
    );
  }

  getGanres() {
    return this.http.get<Genres>(Api.genre);
  }

  getMovie(id: number) {
    return this.http.get<MovieFullInfo>(`${MovieApi.movie}${id}`);
  }

  getMovieImages(id: number) {
    return this.http.get<MovieImages>(`${MovieApi.movie}${id}${MovieApi.images}`);
  }

  getMovieCredits(id: number) {
    return this.http.get<MovieCredits>(`${MovieApi.movie}${id}${MovieApi.credits}`);
  }

  getMovieRecommends(id: number) {
    return this.http.get<MoviesSearchResult>(`${MovieApi.movie}${id}${MovieApi.recommends}`);
  }
}
