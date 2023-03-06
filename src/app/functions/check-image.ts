import { ImageUrls } from 'src/app/main/enums/image-urls.enum';

type ImageUrlType = string | null | undefined;

export function getImageUrl(path: ImageUrlType, emptyImage: ImageUrls): string {
  if (path && path !== undefined) {
    return ImageUrls.imageUrl + path;
  }

  return ImageUrls.define + emptyImage;
}
