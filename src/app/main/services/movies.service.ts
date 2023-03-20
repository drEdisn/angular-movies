import { PaginationService } from 'src/app/main/services/pagination.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Genre } from '../models/genres.model';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { TabPath } from '../enums/api.enum';
import { PaginationConst } from '../enums/pagination.enum';
import { LocalStore } from '../enums/localStore.enum';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private movies$: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);
  private currentTab$: BehaviorSubject<TabPath> = new BehaviorSubject<TabPath>(
    this.getCurrentTabFromLocalStore(),
  );
  public genres: Genre[] = [];
  public searchValue: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private paginationService: PaginationService) {}

  private setCurrentTabToLocalStore(value: TabPath): void {
    if (value !== TabPath.search) {
      localStorage.setItem(LocalStore.currentTab, value);
    }
  }

  public setSearchValue(value: string): void {
    this.searchValue.next(value);
  }

  public getSearchValue(): string {
    return this.searchValue.getValue();
  }

  private getCurrentTabFromLocalStore(): TabPath {
    const tabFromLocalStore = localStorage.getItem(
      LocalStore.currentTab,
    ) as TabPath;
    return tabFromLocalStore || TabPath.popular;
  }

  public getMovies(): Observable<Movie[]> {
    return this.movies$.asObservable();
  }

  public getCurrentTab(): Observable<TabPath> {
    return this.currentTab$.asObservable();
  }

  public getCurrentTabValue(): TabPath {
    return this.currentTab$.getValue();
  }

  public setCurrentTab(value: TabPath): void {
    this.paginationService.setLocalPage(PaginationConst.min);
    this.currentTab$.next(value);
    this.setCurrentTabToLocalStore(value);
  }

  public setMovies(value: Movie[]): void {
    this.movies$.next(value);
  }
}
