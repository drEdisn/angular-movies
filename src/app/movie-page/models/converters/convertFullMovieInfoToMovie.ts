import { MovieFullInfo, MovieFullInfoApi } from './../movie-full-info.model';
export function convertFulMovieInfoToMovie(
  movie: MovieFullInfoApi,
): MovieFullInfo {
  return {
    genres: movie.genres,
    id: movie.id,
    overview: movie.overview,
    posterPath: movie.poster_path,
    releaseDate: movie.release_date,
    revenue: movie.revenue,
    runtime: movie.runtime,
    title: movie.title,
    voteAverage: movie.vote_average,
  };
}
