import {
  MovieImages,
  MovieImagesApi,
  MovieImagePosters,
  MovieImagePostersApi,
} from './../movie-images.model';

export function convertImagesApiToImages(images: MovieImagesApi): MovieImages {
  const backdrops: MovieImagePosters[] = images.backdrops.map((image: MovieImagePostersApi) => {
    return {
      filePath: image.file_path,
    };
  });
  return {
    backdrops,
  };
}
