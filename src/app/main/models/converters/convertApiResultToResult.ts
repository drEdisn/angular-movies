import { MoviesSearchResult } from 'src/app/main/models/search-result.model';
import { SearchResultAPI } from './../search-result.model';
import { setMovies } from './convertMovieApiToMovie';

export function convertApiResultToResult(apiResult: SearchResultAPI): MoviesSearchResult {
  return (
    {
      page: apiResult.page,
      results: setMovies(apiResult.results),
      totalPages: apiResult.total_pages,
      totalResults: apiResult.total_results,
    } || {}
  );
}
