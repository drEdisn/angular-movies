import { Genre } from './../models/genres.module';
import { Injectable } from "@angular/core";

@Injectable()
export class MoviesService {
  genres: Genre[] = [];

}