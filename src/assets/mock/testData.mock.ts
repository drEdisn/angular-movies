import {
  PersonImagesResult,
  PersonImagesResultApi,
  PersonImageApi,
} from 'src/app/actor-page/models/person-images-result';
import {
  PersonCredits,
  PersonCreditsApi,
} from 'src/app/actor-page/models/person-credits.model';
import { Person } from 'src/app/actor-page/models/person.model';
import { PersonApi } from 'src/app/actor-page/models/person.model';
import {
  MovieFullInfo,
  MovieFullInfoApi,
} from 'src/app/movie-page/models/movie-full-info.model';
import { movieArrayApiMock } from './movieArrayApi.mock';
import { movieArrayMock } from 'src/assets/mock/movieArray.mock';
import { Genres } from 'src/app/main/models/genres.model';
import {
  MoviesSearchResult,
  SearchResultAPI,
} from 'src/app/main/models/search-result.model';
import {
  MovieImages,
  MovieImagesApi,
} from 'src/app/movie-page/models/movie-images.model';

export const testGenresMock: Genres = {
  genres: [
    {
      name: '11',
      id: 12,
    },
  ],
};

export const testMoviesApiMock: SearchResultAPI = {
  page: 1,
  results: movieArrayApiMock,
  total_results: 1000,
  total_pages: 200,
};

export const testMoviesMock: MoviesSearchResult = {
  page: 1,
  results: movieArrayMock,
  totalResults: 1000,
  totalPages: 200,
};

export const testImagesApi: MovieImagesApi = {
  id: 123412,
  backdrops: [
    {
      file_path: 'as',
      height: 1234,
      iso_639_1: 'asdf',
      vote_average: 1234,
      vote_count: 1234,
      width: 1234,
    },
  ],
  posters: [
    {
      file_path: 'as',
      height: 1234,
      iso_639_1: 'asdf',
      vote_average: 1234,
      vote_count: 1234,
      width: 1234,
    },
  ],
};

export const testImages: MovieImages = {
  backdrops: [
    {
      filePath: 'as',
    },
  ],
};

export const fullMovieApi: MovieFullInfoApi = {
  adult: false,
  backdrop_path: '/22z44LPkMyf5nyyXvv8qQLsbom.jpg',
  belongs_to_collection: null,
  budget: 20000000,
  genres: [
    { id: 27, name: 'Horror' },
    { id: 9648, name: 'Mystery' },
    { id: 53, name: 'Thriller' },
  ],
  homepage: 'https://www.knockatthecabin.com',
  id: 631842,
  imdb_id: 'tt15679400',
  original_language: 'en',
  original_title: 'Knock at the Cabin',
  overview:
    'While vacationing at a remote cabin, a young girl and her two fathers are taken hostage by four armed strangers who demand that the family make an unthinkable choice to avert the apocalypse. With limited access to the outside world, the family must decide what they believe before all is lost.',
  popularity: 4969.06,
  poster_path: '/dm06L9pxDOL9jNSK4Cb6y139rrG.jpg',
  production_companies: [
    {
      id: 12236,
      logo_path: '/uV6QBPdn3MjQzAFdgEel6od7geg.png',
      name: 'Blinding Edge Pictures',
      origin_country: 'US',
    },
    {
      id: 33,
      logo_path: '/8lvHyhjr8oUKOOy2dKXoALWKdp0.png',
      name: 'Universal Pictures',
      origin_country: 'US',
    },
    {
      id: 7493,
      logo_path: '/452FO4LcI6lA6bfgl6w1kQYRBlr.png',
      name: 'FilmNation Entertainment',
      origin_country: 'US',
    },
    { id: 152785, logo_path: null, name: 'Wishmore', origin_country: 'US' },
    {
      id: 10338,
      logo_path: '/el2ap6lvjcEDdbyJoB3oKiYgXu9.png',
      name: 'Perfect World Pictures',
      origin_country: 'CN',
    },
  ],
  production_countries: [
    { iso_3166_1: 'US', name: 'United States of America' },
  ],
  release_date: '2023-02-01',
  revenue: 52000000,
  runtime: 100,
  spoken_languages: [
    { english_name: 'English', iso_639_1: 'en', name: 'English' },
  ],
  status: 'Released',
  tagline: 'Save your family or save humanity. Make the choice.',
  title: 'Knock at the Cabin',
  video: false,
  vote_average: 6.57,
  vote_count: 815,
};

export const fullMovie: MovieFullInfo = {
  genres: fullMovieApi.genres,
  id: fullMovieApi.id,
  overview: fullMovieApi.overview,
  posterPath: fullMovieApi.poster_path,
  releaseDate: fullMovieApi.release_date,
  revenue: fullMovieApi.revenue,
  runtime: fullMovieApi.runtime,
  title: fullMovieApi.title,
  voteAverage: fullMovieApi.vote_average,
};

export const testPersonApi: PersonApi = {
  birthday: 'asfd',
  known_for_department: 'asfd',
  deathday: 'asfd',
  id: 134,
  name: 'asfd',
  also_known_as: ['asdf'],
  gender: 124,
  biography: 'asfd',
  populatiry: 2345,
  place_of_birth: 'asfd',
  profile_path: 'asfd',
  adult: true,
  imdb_id: 'asfd',
  homepage: 'asfd',
};

export const testPerson: Person = {
  birthday: testPersonApi.birthday,
  name: testPersonApi.name,
  biography: testPersonApi.biography,
  placeOfBirth: testPersonApi.place_of_birth,
  profilePath: testPersonApi.profile_path,
};

export const testCreditsApi: PersonCreditsApi = {
  cast: [],
  crew: [],
  id: 134,
};

export const testCredits: PersonCredits = {
  cast: testCreditsApi.cast.map((movie) => {
    return {
      posterPath: movie.poster_path,
      genreIds: movie.genre_ids,
      id: movie.id,
      title: movie.title,
      voteAverage: movie.vote_average,
    };
  }),
};

export const testImagePersonApi: PersonImagesResultApi = {
  id: 124,
  profiles: [
    {
      aspect_ratio: 1243,
      file_path: '1234',
      height: 124,
      iso_639_1: '1234',
      vote_average: 124,
      vote_count: 1234,
      width: 1234,
    },
  ],
};

export const testImagePerson: PersonImagesResult = {
  profiles: testImagePersonApi.profiles.map((image: PersonImageApi) => {
    return {
      filePath: image.file_path,
    };
  }),
};
