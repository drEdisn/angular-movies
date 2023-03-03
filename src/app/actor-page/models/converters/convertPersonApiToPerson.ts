import { Person, PersonApi } from './../person.model';

export function convertPersonApiToPerson(person: PersonApi): Person {
  return {
    birthday: person.birthday,
    name: person.name,
    biography: person.biography,
    placeOfBirth: person.place_of_birth,
    profilePath: person.profile_path,
  };
}