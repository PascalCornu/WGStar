import {environment} from '../../environments/environment';


export const apiEndpoints = {
  getPersons: environment.BACKEND_URL + '/person/all',
  saveWg: environment.BACKEND_URL + '/wg/save'
};
