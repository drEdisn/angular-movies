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
    return this.http.get<MoviesSearchResult>(`${Api.popular}?page=${page}`);
  }

  requestSearchMovie(query: string, page = 1) {
    return this.http.get<MoviesSearchResult>(
      `${Api.movie}?query=${query}&page=${page}`,
    );
  }

  getGanres() {
    return this.http.get<Genres>(Api.genre);
  }
}
