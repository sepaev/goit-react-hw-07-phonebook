import { fetchContactsRequest, fetchContactsSuccess, fetchContactsError } from '../actions/contacts_actions';

export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());
  const contacts = await fetch();
};
