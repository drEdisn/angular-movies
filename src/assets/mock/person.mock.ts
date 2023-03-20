import { Person, PersonApi } from 'src/app/actor-page/models/person.model';

export const personMockApi: PersonApi = {
  birthday: 'asfd',
  known_for_department: 'asfd',
  deathday: 'asfd',
  id: 134,
  name: 'asfd',
  also_known_as: ['asdf'],
  gender: 124,
  biography: 'asfd',
  populatiry: 2345,
  place_of_birth: 'asfd',
  profile_path: 'asfd',
  adult: true,
  imdb_id: 'asfd',
  homepage: 'asfd',
};

export const personMock: Person = {
  birthday: personMockApi.birthday,
  name: personMockApi.name,
  biography: personMockApi.biography,
  placeOfBirth: personMockApi.place_of_birth,
  profilePath: personMockApi.profile_path,
};
