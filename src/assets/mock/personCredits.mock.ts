import {
  PersonCredits,
  PersonCreditsApi,
} from 'src/app/actor-page/models/person-credits.model';

export const perosonCreditsMockApi: PersonCreditsApi = {
  cast: [],
  crew: [],
  id: 134,
};

export const perosonCreditsMock: PersonCredits = {
  cast: perosonCreditsMockApi.cast.map((movie) => {
    return {
      posterPath: movie.poster_path,
      genreIds: movie.genre_ids,
      id: movie.id,
      title: movie.title,
      voteAverage: movie.vote_average,
    };
  }),
};
