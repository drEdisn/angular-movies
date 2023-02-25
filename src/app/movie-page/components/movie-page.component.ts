import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Movie } from 'src/app/main/models/movie.model';
import { movieArrayMock } from 'src/assets/mock/movieArray.mock';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviePageComponent {
  public movieArray: Movie[] = movieArrayMock;
}
