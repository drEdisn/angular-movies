import { Movie } from 'src/app/main/models/movie.model';
import { movieArrayMock } from 'src/assets/mock/movieArray.mock';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './actor-page.component.html',
  styleUrls: ['./actor-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActorPageComponent {
  public movieArray: Movie[] = movieArrayMock;
}
