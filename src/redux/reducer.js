import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact } from './actions/contacts_actions';
import { makeSearch } from './actions/filter_actions';
import { addNewContactToState, clearNewContactState } from './actions/newContacts_actions';
const localContacts = JSON.parse(window.localStorage.getItem('contacts'));

export const contactsReducer = createReducer(localContacts ? localContacts : [], {
  [addContact.type]: (state, action) => {
    window.localStorage.setItem('contacts', JSON.stringify([...state, action.payload]));
    return [...state, action.payload];
  },
  [deleteContact.type]: (state, action) => {
    const filtredState = state.filter(({ id }) => id !== action.payload);
    window.localStorage.setItem('contacts', JSON.stringify(filtredState));
    return filtredState;
  },
});

export const filterReducer = createReducer('', { [makeSearch.type]: (state, { payload }) => payload });

export const newContactReducer = createReducer(
  { newName: '', newNumber: '' },
  {
    [addNewContactToState.type]: (_, { payload }) => payload,
    [clearNewContactState.type]: (_, { payload }) => payload,
  },
);
