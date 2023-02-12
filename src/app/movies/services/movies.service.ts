import { Genre } from '../models/genres.model';
import { Injectable } from '@angular/core';

@Injectable()
export class MoviesService {
  genres: Genre[] = [];
  totalPages = 1;
}
