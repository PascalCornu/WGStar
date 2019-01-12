import {Person} from './person';
import {Wg} from './wg';

export class Invitation {
  id?: number;
  invitedPerson?: Person;
  invitingWg?: Wg;
  done?: boolean;
}
