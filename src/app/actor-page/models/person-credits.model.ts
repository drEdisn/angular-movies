import { Movie } from 'src/app/main/models/movie.model';
import { PersonCastApi } from './person-cast.model';
import { PersonCrewApi } from './person-crew.model';

export interface PersonCreditsApi {
  cast: PersonCastApi[];
  crew: PersonCrewApi[];
  id: number;
}

export interface PersonCredits {
  cast: Movie[];
}
