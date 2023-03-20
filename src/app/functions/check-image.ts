import { ImageUrls } from 'src/app/main/enums/image-urls.enum';

export type ImageUrlType = string | null | undefined;

export function getImageUrl(path: ImageUrlType, emptyImage: ImageUrls): string {
  if (path) {
    return ImageUrls.imageUrl + path;
  }

  return ImageUrls.define + emptyImage;
}
