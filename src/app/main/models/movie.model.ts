export interface MovieAPI {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  original_title: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface Movie {
  posterPath: string | null;
  genreIds: number[];
  id: number;
  title: string;
  voteAverage: number;
}