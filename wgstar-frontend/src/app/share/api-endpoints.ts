import {environment} from '../../environments/environment';


export const apiEndpoints = {
  getPersons: environment.BACKEND_URL + '/person/all',
  savePerson: environment.BACKEND_URL + '/person/save',
  saveWg: environment.BACKEND_URL + '/wg/save'
};
