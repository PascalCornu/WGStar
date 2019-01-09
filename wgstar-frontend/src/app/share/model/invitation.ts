import {Person} from './person';
import {Wg} from './wg';

export class Invitation {
  id?: number;
  invitingPerson?: Person;
  invitingWg?: Wg;
  done?: boolean;
}
