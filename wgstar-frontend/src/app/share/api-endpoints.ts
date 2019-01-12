import {environment} from '../../environments/environment';

/**
 * API-Endpunkte für Backend-calls
 */
export const apiEndpoints = {
  getPersons: environment.BACKEND_URL + '/person/all',
  savePerson: environment.BACKEND_URL + '/person/save',
  getPeronById: environment.BACKEND_URL + '/person/id',
  saveWg: environment.BACKEND_URL + '/wg/save',
  getWgByPersonId: environment.BACKEND_URL + '/wg/get/',
  updateWg: environment.BACKEND_URL + '/wg/update',
  saveInvitation: environment.BACKEND_URL + '/invitation/save',
  getInvitations: environment.BACKEND_URL + '/invitation/',
  updateInvitation: environment.BACKEND_URL + '/invitation/update'
};
