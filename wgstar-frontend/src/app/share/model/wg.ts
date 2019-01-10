/**
 * Autor: Yves Stalder
 * Version: 1.0
 * Datum: 16.10.2018
 * Model für ein WG-Objekt
 */
import {Person} from './person';

export class Wg {
  id?: number;
  name?: string;
  address?: string;
  plz?: number;
  place?: string;
  rooms?: number;
  owner?: Person;
  personList?: Person[];
}
