import { Movie } from './movie.model';
import { TVShows } from './tv-shows.model';

export interface People {
  profilePath: string | null;
  adult: boolean;
  id: number;
  knownFor: Movie | TVShows;
}
