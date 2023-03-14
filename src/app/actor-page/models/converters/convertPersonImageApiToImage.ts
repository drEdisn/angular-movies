import {
  PersonImage,
  PersonImageApi,
  PersonImagesResult,
  PersonImagesResultApi,
} from './../person-images-result';

export function convertPersonImageApiToImage(
  images: PersonImagesResultApi,
): PersonImagesResult {
  const profiles: PersonImage[] = images.profiles.map(
    (image: PersonImageApi) => {
      return {
        filePath: image.file_path,
      };
    },
  );
  return { profiles };
}
