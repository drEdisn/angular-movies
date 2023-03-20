import { ActorService } from './actor.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  UrlTree,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ActrosGuardService implements CanActivate {
  constructor(private actorService: ActorService, private route: Router) {}

  public canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree {
    const actorId: number = Number(route.params['id']);

    return this.checkActor(actorId);
  }

  private checkActor(actorId: number): boolean | UrlTree {
    const isActor: boolean = this.actorService
      .getActorIds()
      .some((id) => id === actorId);

    if (isActor) {
      return true;
    }

    return this.route.parseUrl('/page-not-found');
  }
}
