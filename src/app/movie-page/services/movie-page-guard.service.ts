import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviePageGuardService implements CanActivate {

  constructor(
    private route: Router,
  ) {}

  public canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree {
    const movieId: string = route.params['id'];
  
    return this.checkMovie(movieId);
  }

  private checkMovie(movieId: string): boolean | UrlTree {
    const isId: boolean = /^[0-9]{6,6}/.test(movieId);
    
    if (isId) {
      return true;
    }

    return this.route.parseUrl('/page-not-found');
  }
}