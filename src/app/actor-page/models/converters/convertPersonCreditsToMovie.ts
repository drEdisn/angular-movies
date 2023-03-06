import { PersonCredits, PersonCreditsApi } from './../person-credits.model';

export function convertPersonCreditsToMovie(credits: PersonCreditsApi): PersonCredits {
  const cast = credits.cast.map((movie) => {
    return {
      posterPath: movie.poster_path,
      genreIds: movie.genre_ids,
      id: movie.id,
      title: movie.title,
      voteAverage: movie.vote_average,
    };
  });

  return { cast };
}
