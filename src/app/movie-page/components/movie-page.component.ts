import { Component } from '@angular/core';
import { Movie } from 'src/app/main/models/movie.model';
import { movieArray } from 'src/assets/movieArray';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss'],
})
export class MoviePageComponent {
  movieArray: Movie[] = movieArray;
}
