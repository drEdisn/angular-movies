import { movieArrayMock } from 'src/assets/mock/movieArray.mock';
import { Genres } from 'src/app/main/models/genres.model';
import { MoviesSearchResult } from 'src/app/main/models/search-result.model';

export const testGenresMock: Genres = {
  genres: [
    {
      name: '11',
      id: 12,
    },
  ],
};

export const testMoviesMock: MoviesSearchResult = {
  page: 1,
  results: movieArrayMock,
  total_results: 1000,
  total_pages: 200,
};
