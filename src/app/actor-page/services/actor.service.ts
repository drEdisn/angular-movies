import { LocalStore } from 'src/app/main/enums/localStore.enum';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ActorService {
  private actorIds$: BehaviorSubject<number[]> = new BehaviorSubject<number[]>(
    this.getLocalActors(),
  );

  public getActorIds(): number[] {
    return this.actorIds$.getValue();
  }

  public setActorIds(value: number[]): void {
    this.actorIds$.next(value);
    this.setLocalActors(value);
  }

  private getLocalActors(): number[] {
    return JSON.parse(localStorage.getItem(LocalStore.actorIds) || '[]');
  }

  private setLocalActors(value: number[]): void {
    localStorage.setItem(LocalStore.actorIds, JSON.stringify(value));
  }
}
