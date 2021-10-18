import { createAction } from '@reduxjs/toolkit';

// import { postContact } from '../../services/contactsAPI';

// export const deleteContact = createAction('contacts/delete', (id, contacts) => {
//   const contact = contacts.find(contact => contact.id === id);
//   if (!contact) {
//     return;
//   }
//   return {
//     payload: id,
//   };
// });
//pending
export const fetchContactsRequest = createAction('contacts/fetchContactsRequest');
//fullfield
export const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess');
//rejected
export const fetchContactsError = createAction('contacts/fetchContactsError');
