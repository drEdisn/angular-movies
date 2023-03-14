import { MovieCrew } from './movie-crew.model';
import { MovieCast } from './movie-cast.model';

export interface MovieCredits {
  id: number;
  cast: MovieCast[];
  crew: MovieCrew[];
}
