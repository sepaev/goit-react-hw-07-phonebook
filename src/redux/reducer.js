import { createReducer } from '@reduxjs/toolkit';

import { addContact, deleteContact } from './actions/contacts_actions';
import { makeSearch } from './actions/filter_actions';
import { addNewContactToState, clearNewContactState } from './actions/newContacts_actions';

export const contactsReducer = createReducer([], {
  [addContact.type]: (state, action) => [...state, action.payload],
  [deleteContact.type]: (state, action) => state.filter(({ id }) => id !== action.payload),
});

export const filterReducer = createReducer('', { [makeSearch.type]: (_, { payload }) => payload });

export const newContactReducer = createReducer(
  { newName: '', newNumber: '' },
  {
    [addNewContactToState.type]: (_, { payload }) => payload,
    [clearNewContactState.type]: (_, { payload }) => payload,
  },
);
