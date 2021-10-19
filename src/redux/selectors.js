import doFiltration from './operations/filterOperations';
import clearDoubleIDs from './functions/clearDoubleIDs';
export const getContactsSelector = state => state.contacts;
export const getEntitiesSelector = state => getContactsSelector(state).entities;
export const getFilterSelector = state => state.filter;
export const getNewContactSelector = state => state.newContact;
export const getAllStateSelector = state => state;

export const getFiltredContactsSelector = state => {
  const contacts = getEntitiesSelector(state);
  const filter = getFilterSelector(state);

  if (!contacts || !contacts.length) return [];
  if (!filter) return contacts;
  const filtredArray = doFiltration(state);
  const clearArray = clearDoubleIDs(filtredArray);
  return clearArray;
};
