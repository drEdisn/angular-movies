export interface MovieImagePostersApi {
  file_path: string;
  height: number;
  iso_639_1: null | string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface MovieImagePosters {
  filePath: string;
}

export interface MovieImagesApi {
  id: number;
  backdrops: MovieImagePostersApi[];
  posters: MovieImagePostersApi[];
}

export interface MovieImages {
  backdrops: MovieImagePosters[];
}
