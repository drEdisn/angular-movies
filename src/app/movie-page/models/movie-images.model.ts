export interface MovieImagePosters {
  file_path: string,
  height: number,
  iso_639_1: null | string,
  vote_average: number,
  vote_count: number,
  width: number,
}

export interface MovieImages {
  id: number,
  backdrops: MovieImagePosters[],
  posters: MovieImagePosters[],
}