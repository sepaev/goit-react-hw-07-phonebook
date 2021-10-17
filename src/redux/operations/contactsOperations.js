import { fetchContactsRequest, fetchContactsSuccess, fetchContactsError } from '../actions/contacts_actions';
import { fetchContacts } from '../../services/contactsAPI';

export const getContactsFromServer = () => async dispatch => {
  dispatch(fetchContactsRequest());
  try {
    console.log('try');
    const contacts = await fetchContacts();
    dispatch(fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};
