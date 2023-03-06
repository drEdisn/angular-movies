import { Movie, MovieAPI } from './movie.model';
import { People } from './people.model';
import { TVShows } from './tv-shows.model';

type MultiType = Array<Movie | TVShows | People>;

export interface SearchResultAPI {
  page: number;
  results: MovieAPI[];
  total_results: number;
  total_pages: number;
}

export interface MoviesSearchResult {
  page: number;
  results: Movie[];
  totalResults: number;
  totalPages: number;
}

export interface MultiSearchResult {
  page: number;
  results: MultiType;
  totalResults: number;
  totalPages: number;
}
