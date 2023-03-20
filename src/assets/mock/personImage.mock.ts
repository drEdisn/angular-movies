import {
  PersonImageApi,
  PersonImagesResult,
  PersonImagesResultApi,
} from 'src/app/actor-page/models/person-images-result';

export const personImageMockApi: PersonImagesResultApi = {
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

export const personImageMock: PersonImagesResult = {
  profiles: personImageMockApi.profiles.map((image: PersonImageApi) => {
    return {
      filePath: image.file_path,
    };
  }),
};
