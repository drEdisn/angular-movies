import { BehaviorSubject } from 'rxjs';
import { MoviesService } from 'src/app/main/services/movies.service';
import { Genre } from 'src/app/main/models/genres.model';
import { Movie } from 'src/app/main/models/movie.model';
import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ImageUrls } from 'src/app/main/enums/image-urls.enum';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieItemComponent implements OnInit {
  public genres = new BehaviorSubject<Genre[]>([]);

  @Input() movieItem: Movie;

  constructor(private moviesService: MoviesService) {}

  public ngOnInit(): void {
    this.setGeners();
  }

  private setGeners(): void {
    const genres = this.moviesService.genres.filter((genre) =>
      this.movieItem.genre_ids.includes(genre.id),
    );
    this.genres.next(genres);
  }

  public getImage(): string {
    if (this.movieItem.poster_path) {
      return ImageUrls.imageUrl + this.movieItem.poster_path;
    }

    return ImageUrls.define + ImageUrls.emptyImage;
  }
}
