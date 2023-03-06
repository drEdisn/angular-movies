import { Genre } from 'src/app/main/models/genres.model';

interface Company {
  name: string;
  id: number;
  logo_path: string | null;
  origin_country: string;
}

interface Country {
  iso_3166_1: string;
  name: string;
}

interface Language {
  inso_639_1: string;
  name: string;
}

export interface MovieFullInfo {
  genres: Genre[];
  id: number;
  overview: string;
  posterPath: string | null;
  releaseDate: string;
  revenue: number;
  runtime: number;
  title: string;
  voteAverage: number;
}

export interface MovieFullInfoApi {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: null | object;
  budget: number;
  genres: Genre[];
  homepage: string | null;
  id: number;
  imdb_id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: Company[];
  prouction_countries: Country[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Language[];
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
