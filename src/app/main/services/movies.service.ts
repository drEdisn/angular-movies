import { Genre } from '../models/genres.model';
import { Injectable } from '@angular/core';
import { Cast } from 'src/app/actor-page/models/cast.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  public genres: Genre[] = [];
  public casts: Cast[] = [];
}
