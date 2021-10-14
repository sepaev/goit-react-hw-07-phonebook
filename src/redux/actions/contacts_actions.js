import { createAction } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

export const addContact = createAction('contacts/create', ({ newName, newNumber }) => {
  return {
    payload: {
      id: Date.now().toString(),
      name: newName,
      number: newNumber,
    },
  };
});

export const deleteContact = createAction('contacts/delete', (id, contacts) => {
  const contact = contacts.find(contact => contact.id === id);
  if (!contacts.find(contact => contact.id === id)) {
    Notify.failure('Oh, no! Nothing was deleted.');
    return;
  }
  Notify.info(`Contact ${contact.name} was removed successfully`);
  return {
    payload: id,
  };
});
