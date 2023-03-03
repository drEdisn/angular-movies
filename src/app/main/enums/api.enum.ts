export enum Api {
  url = 'https://api.themoviedb.org/3/',
  api_key = '6ee2a0135bb529fe48f0d29a4884ea2c',
  seatchMovie = 'search/movie',
  multi = 'search/multi',
  genre = 'genre/movie/list',
}

export enum MovieApi {
  movie = 'movie/',
  images = '/images',
  credits = '/credits',
  recommends = '/recommendations',
}

export enum PeopleApi {
  person = 'person/',
  images = '/images',
  credits = '/movie_credits',
  recommends = '/recommendations',
}

export enum TabPath {
  popular = 'popular',
  topRated = 'top_rated',
  upcoming = 'upcoming',
}
