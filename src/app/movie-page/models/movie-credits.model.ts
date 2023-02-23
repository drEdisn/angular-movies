import { Crew } from './../../actor-page/models/crew.model';
import { Cast } from "src/app/actor-page/models/cast.model";

export interface MovieCredits {
  id: number,
  cast: Cast[],
  crew: Crew[],
}