import { movieArrayApiMock } from './movieArrayApi.mock';
import { movieArrayMock } from 'src/assets/mock/movieArray.mock';
import { Genres } from 'src/app/main/models/genres.model';
import {
  MoviesSearchResult,
  SearchResultAPI,
} from 'src/app/main/models/search-result.model';

export const genresMock: Genres = {
  genres: [
    {
      name: '11',
      id: 12,
    },
  ],
};

export const resultMoviesApiMock: SearchResultAPI = {
  page: 1,
  results: movieArrayApiMock,
  total_results: 1000,
  total_pages: 200,
};

export const resultMoviesMock: MoviesSearchResult = {
  page: 1,
  results: movieArrayMock,
  totalResults: 1000,
  totalPages: 200,
};