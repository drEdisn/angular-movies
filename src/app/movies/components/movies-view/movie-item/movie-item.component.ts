import { BehaviorSubject } from 'rxjs';
import { MoviesService } from './../../../services/movies.service';
import { Genre } from '../../../models/genres.model';
import { Movie } from './../../../models/movie.model';
import { Component, Input, OnInit } from '@angular/core';
import { ImageUrls } from 'src/app/movies/enums/image-urls.enum';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent implements OnInit {
  genres = new BehaviorSubject<Genre[]>([]);

  @Input() movieItem: Movie;

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.setGeners();
  }

  setGeners() {
    const genres = this.moviesService.genres.filter((genre) =>
      this.movieItem.genre_ids.includes(genre.id),
    );
    this.genres.next(genres);
  }

  getImage() {
    if (this.movieItem.poster_path) {
      return ImageUrls.imageUrl + this.movieItem.poster_path;
    }

    return ImageUrls.define + ImageUrls.emptyImage;
  }
}
