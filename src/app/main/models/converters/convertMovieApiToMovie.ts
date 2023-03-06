import { MovieAPI } from './../movie.model';
import { Movie } from 'src/app/main/models/movie.model';

export function convertMovieApiToMovie(res: MovieAPI): Movie {
  return (
    {
      posterPath: res.poster_path,
      genreIds: res.genre_ids,
      id: res.id,
      title: res.title,
      voteAverage: res.vote_average,
    } || {}
  );
}

export function setMovies(arr: MovieAPI[] = []): Movie[] {
  const movies: Movie[] = [];

  arr.forEach((movie) => {
    movies.push(convertMovieApiToMovie(movie));
  });

  return movies;
}
