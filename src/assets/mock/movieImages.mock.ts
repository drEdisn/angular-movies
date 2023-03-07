import { MovieImages, MovieImagesApi } from 'src/app/movie-page/models/movie-images.model';

export const movieImagesMockApi: MovieImagesApi = {
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

export const movieImagesMock: MovieImages = {
  backdrops: [
    {
      filePath: 'as',
    },
  ],
};