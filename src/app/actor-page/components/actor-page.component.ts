import { Movie } from 'src/app/main/models/movie.model';
import { movieArray } from './../../../assets/movieArray';
import { Component } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './actor-page.component.html',
  styleUrls: ['./actor-page.component.scss'],
})
export class ActorPageComponent {
  movieArray: Movie[] = movieArray;
}
