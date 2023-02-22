import { movieArray } from 'src/assets/movieArray';
import { Genres } from './../app/main/models/genres.model';
import { MoviesSearchResult } from './../app/main/models/search-result.model';

export const testGenres: Genres = {
  genres: [
    {
      name: '11',
      id: 12,
    },
  ],
};

export const testMovies: MoviesSearchResult = {
  page: 1,
  results: movieArray,
  total_results: 1000,
  total_pages: 200,
};
