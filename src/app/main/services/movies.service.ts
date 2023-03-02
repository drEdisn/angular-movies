import { BehaviorSubject, Observable } from 'rxjs';
import { Genre } from '../models/genres.model';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { TabPath } from '../enums/api.enum';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private movies$: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);
  private currentTab: BehaviorSubject<TabPath> = new BehaviorSubject<TabPath>(TabPath.popular);
  public genres: Genre[] = [];

  public getMovies(): Observable<Movie[]> {
    return this.movies$.asObservable();
  }

  public getCurrentTab(): Observable<TabPath> {
    return this.currentTab.asObservable();
  }

  public getCurrentTabValue(): TabPath {
    return this.currentTab.getValue();
  }

  public setCurrentTab(value: TabPath): void {
    this.currentTab.next(value);
  }

  public setMovies(value: Movie[]): void {
    this.movies$.next(value);
  }
}
