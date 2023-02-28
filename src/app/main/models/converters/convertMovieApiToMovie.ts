import { MovieAPI } from './../movie.model';
import { Movie } from 'src/app/main/models/movie.model';

export function convertMovieApiToMovie(res: MovieAPI): Movie {
  return {
    posterPath: res.poster_path,
    adult: res.adult,
    overview: res.overview,
    releaseDate: res.release_date,
    originalTitle: res.original_title,
    genreIds: res.genre_ids,
    id: res.id,
    originalLanguage: res.original_language,
    title: res.title,
    backdropPath: res.backdrop_path,
    popularity: res.popularity,
    voteCount: res.vote_count,
    video: res.video,
    voteAverage: res.vote_average,
  } || {};
}

export function setMovies(arr: MovieAPI[] = []): Movie[] {
  const movies: Movie[] = [];

  arr.forEach(movie => {
    movies.push(convertMovieApiToMovie(movie));
  });

  return movies;
}