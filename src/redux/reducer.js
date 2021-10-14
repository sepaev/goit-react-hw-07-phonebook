import types from './types';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact } from './actions/contacts_actions';
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

export const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
};

export const newContactReducer = (state = { newName: '', newNumber: '' }, { type, payload }) => {
  switch (type) {
    case types.ADD_NEW_CONTACT:
      return payload;
    case types.REMOVE_NEW_CONTACT:
      return payload;
    case types.CHECK_NEW_CONTACT:
      return payload;
    default:
      return state;
  }
};
