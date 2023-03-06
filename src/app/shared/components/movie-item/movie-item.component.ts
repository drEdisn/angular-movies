import { BehaviorSubject } from 'rxjs';
import { MoviesService } from 'src/app/main/services/movies.service';
import { Genre } from 'src/app/main/models/genres.model';
import { Movie } from 'src/app/main/models/movie.model';
import { Component, Input, OnInit, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { ImageUrls } from 'src/app/main/enums/image-urls.enum';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieItemComponent implements OnInit, OnChanges {
  public genres$: BehaviorSubject<Genre[]> = new BehaviorSubject<Genre[]>([]);
  public posterPath: string = '';

  @Input() movieItem: Movie;

  constructor(private moviesService: MoviesService) {}

  public ngOnInit(): void {
    this.setGeners();
  }

  public ngOnChanges(): void {
    this.posterPath = this.getImage();
  }

  private setGeners(): void {
    const genres: Genre[] = this.moviesService.genres.filter((genre) =>
      this.movieItem.genreIds.includes(genre.id),
    );
    this.genres$.next(genres);
  }

  private getImage(): string {
    if (this.movieItem?.posterPath) {
      return ImageUrls.imageUrl + this.movieItem.posterPath;
    }

    return ImageUrls.define + ImageUrls.emptyMovieImage;
  }
}
