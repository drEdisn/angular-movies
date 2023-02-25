import { Observable } from 'rxjs';
import { Genres } from 'src/app/main/models/genres.model';
import { MoviesSearchResult } from 'src/app/main/models/search-result.model';
import { Api } from 'src/app/main/enums/api.enum';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public requestPopularMovie(page = 1): Observable<MoviesSearchResult> {
    return this.http.get<MoviesSearchResult>(`${Api.popular}?page=${page}`);
  }

  public requestSearchMovie(
    query: string,
    page = 1,
  ): Observable<MoviesSearchResult> {
    return this.http.get<MoviesSearchResult>(
      `${Api.movie}?query=${query}&page=${page}`,
    );
  }

  public getGanres(): Observable<Genres> {
    return this.http.get<Genres>(Api.genre);
  }
}
