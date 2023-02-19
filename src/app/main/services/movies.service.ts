import { Genre } from '../models/genres.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  genres: Genre[] = [];
  totalPages = 1;
}
