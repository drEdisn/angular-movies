export interface PersonApi {
  birthday: string | null,
  known_for_department: string,
  deathday: null | string,
  id: number,
  name: string,
  also_known_as: string[],
  gender: number,
  biography: string,
  populatiry: number,
  place_of_birth: string | null,
  profile_path: string | null,
  adult: boolean,
  imdb_id: string,
  homepage: null | string,
}

export interface Person {
  birthday: string | null,
  name: string,
  biography: string,
  placeOfBirth: string | null,
  profilePath: string | null,
}
