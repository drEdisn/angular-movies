import { convertPersonImageApiToImage } from 'src/app/actor-page/models/converters/convertPersonImageApiToImage';
import { convertPersonCreditsToMovie } from 'src/app/actor-page/models/converters/convertPersonCreditsToMovie';
import { convertPersonApiToPerson } from 'src/app/actor-page/models/converters/convertPersonApiToPerson';
import { convertImagesApiToImages } from 'src/app/movie-page/models/converters/convertImagesApiToImages';
import { convertFulMovieInfoToMovie } from 'src/app/movie-page/models/converters/convertFullMovieInfoToMovie';
import { convertApiResultToResult } from 'src/app/main/models/converters/convertApiResultToResult';

export {
  convertPersonImageApiToImage,
  convertPersonCreditsToMovie,
  convertPersonApiToPerson,
  convertImagesApiToImages,
  convertFulMovieInfoToMovie,
  convertApiResultToResult,
};
