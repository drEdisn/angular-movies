import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movie } from 'src/app/main/models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MoviePageService {
  private recommends$: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);

  public getRecommendsValue(): Movie[] {
    return this.recommends$.getValue();
  }

  public getRecommends(): Observable<Movie[]> {
    return this.recommends$.asObservable();
  }

  public setRecommends(value: Movie[]): void {
    this.recommends$.next(value);
  }
}