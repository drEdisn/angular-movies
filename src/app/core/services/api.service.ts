import { Genre } from './../../movies/models/genres.module';
import { MoviesSearchResult } from './../../movies/models/search-result.model';
import { Api } from './../../movies/models/enums';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient,
  ) {}

  moviesRequest() {
    return this.http.get<MoviesSearchResult>(`${Api.movie}?query=${'man'}&page=${1}`);
  }

  getGanres() {
    return this.http.get<Genre[]>(Api.genre);
  }
}