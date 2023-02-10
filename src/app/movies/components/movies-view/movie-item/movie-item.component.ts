import { BehaviorSubject } from 'rxjs';
import { MoviesService } from './../../../services/movies.service';
import { Genre } from './../../../models/genres.module';
import { Movie } from './../../../models/movie.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {

  genres = new BehaviorSubject<Genre[]>([]);

  @Input() movieItem: Movie;

  constructor(
    private moviesService: MoviesService,
  ) {}

  ngOnInit() {
    const genres = this.moviesService.genres.filter(genre => this.movieItem.genre_ids.includes(genre.id));
    this.genres.next(genres);
  }
}
