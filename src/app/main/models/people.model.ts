import { Movie } from './movie.model';
import { TVShows } from './tv-shows.model';

export interface People {
  profile_path: string | null;
  adult: boolean;
  id: number;
  known_for: Movie | TVShows;
}
