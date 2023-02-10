import { Movie } from './../../models/movie.model';
import { ApiService } from './../../../core/services/api.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MoviesService } from '../../services/movies.service';
// import { MoviesSearchResult } from '../../models/search-result.model';

@Component({
  selector: 'app-movies-view',
  templateUrl: './movies-view.component.html',
  styleUrls: ['./movies-view.component.scss'],
})
export class MoviesViewComponent implements OnInit {

  movies = new BehaviorSubject<Movie[]>([]);

  constructor(
    private apiService: ApiService,
    private moviesService: MoviesService,
  ) {}

  ngOnInit() {
    this.apiService.moviesRequest().subscribe(result => {
      this.movies.next(result.results);
    });

    this.apiService.getGanres().subscribe(genres => {
      this.moviesService.genres = genres;
    })
  }
}
