import { Movie } from './movie.model';
import { People } from './people.model';
import { TVShows } from './tv-shows.model';

type MultiType = Array<Movie | TVShows | People>;

export interface MoviesSearchResult {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}

export interface MultiSearchResult {
  page: number;
  results: MultiType;
  total_results: number;
  total_pages: number;
}
