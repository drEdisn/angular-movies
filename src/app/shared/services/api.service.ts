import {
  PersonImagesResult,
  PersonImagesResultApi,
} from 'src/app/actor-page/models/person-images-result';
import { Person, PersonApi } from 'src/app/actor-page/models/person.model';
import { PersonCredits, PersonCreditsApi } from 'src/app/actor-page/models/person-credits.model';
import { Observable, map } from 'rxjs';
import { SearchResultAPI } from 'src/app/main/models/search-result.model';
import { MoviesSearchResult } from 'src/app/main/models/search-result.model';
import { Genres } from 'src/app/main/models/genres.model';
import { Api, PeopleApi, TabPath } from 'src/app/main/enums/api.enum';
import { MovieFullInfo, MovieFullInfoApi } from 'src/app/movie-page/models/movie-full-info.model';
import { MovieCredits } from 'src/app/movie-page/models/movie-credits.model';
import { MovieImages, MovieImagesApi } from 'src/app/movie-page/models/movie-images.model';
import { MovieApi } from 'src/app/main/enums/api.enum';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { convertApiResultToResult } from 'src/app/main/models/converters/convertApiResultToResult';
import { convertFulMovieInfoToMovie } from 'src/app/movie-page/models/converters/convertFullMovieInfoToMovie';
import { convertImagesApiToImages } from 'src/app/movie-page/models/converters/convertImagesApiToImages';
import { convertPersonCreditsToMovie } from 'src/app/actor-page/models/converters/convertPersonCreditsToMovie';
import { convertPersonApiToPerson } from 'src/app/actor-page/models/converters/convertPersonApiToPerson';
import { convertPersonImageApiToImage } from 'src/app/actor-page/models/converters/convertPersonImageApiToImage';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public requestTabMovie(
    tab: TabPath = TabPath.popular,
    page: number = 1,
  ): Observable<MoviesSearchResult> {
    return this.http.get<SearchResultAPI>(`${MovieApi.movie}${tab}?page=${page}`).pipe(
      map((res: SearchResultAPI) => {
        return convertApiResultToResult(res);
      }),
    );
  }

  public requestSearchMovie(query: string, page: number = 1): Observable<MoviesSearchResult> {
    return this.http.get<SearchResultAPI>(`${Api.seatchMovie}?query=${query}&page=${page}`).pipe(
      map((res: SearchResultAPI) => {
        return convertApiResultToResult(res);
      }),
    );
  }

  public getGanres(): Observable<Genres> {
    return this.http.get<Genres>(Api.genre);
  }

  public getMovie(id: number): Observable<MovieFullInfo> {
    return this.http.get<MovieFullInfoApi>(`${MovieApi.movie}${id}`).pipe(
      map((movie: MovieFullInfoApi) => {
        return convertFulMovieInfoToMovie(movie);
      }),
    );
  }

  public getMovieImages(id: number): Observable<MovieImages> {
    return this.http.get<MovieImagesApi>(`${MovieApi.movie}${id}${MovieApi.images}`).pipe(
      map((images: MovieImagesApi) => {
        return convertImagesApiToImages(images);
      }),
    );
  }

  public getMovieCredits(id: number): Observable<MovieCredits> {
    return this.http.get<MovieCredits>(`${MovieApi.movie}${id}${MovieApi.credits}`);
  }

  public getMovieRecommends(id: number): Observable<MoviesSearchResult> {
    return this.http.get<SearchResultAPI>(`${MovieApi.movie}${id}${MovieApi.recommends}`).pipe(
      map((res: SearchResultAPI) => {
        return convertApiResultToResult(res);
      }),
    );
  }

  public getPersonCredits(id: number): Observable<PersonCredits> {
    return this.http.get<PersonCreditsApi>(`${PeopleApi.person}${id}${PeopleApi.credits}`).pipe(
      map((credits: PersonCreditsApi) => {
        return convertPersonCreditsToMovie(credits);
      }),
    );
  }

  public getPersonInfo(id: number): Observable<Person> {
    return this.http.get<PersonApi>(`${PeopleApi.person}${id}`).pipe(
      map((person: PersonApi) => {
        return convertPersonApiToPerson(person);
      }),
    );
  }

  public getPersonImages(id: number): Observable<PersonImagesResult> {
    return this.http.get<PersonImagesResultApi>(`${PeopleApi.person}${id}${PeopleApi.images}`).pipe(
      map((images: PersonImagesResultApi) => {
        return convertPersonImageApiToImage(images);
      }),
    );
  }
}
