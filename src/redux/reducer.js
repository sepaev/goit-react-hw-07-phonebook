import { createReducer } from '@reduxjs/toolkit';

import { addContact, deleteContact } from './actions/contacts_actions';
import { fetchContactsRequest, fetchContactsSuccess, fetchContactsError } from './actions/contacts_actions';
import { makeSearch } from './actions/filter_actions';
import { addNewContactToState, clearNewContactState } from './actions/newContacts_actions';

export const contactsReducer = createReducer([], {
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) => state.filter(({ id }) => id !== action.payload),
});

export const filterReducer = createReducer('', { [makeSearch.type]: (_, { payload }) => payload });

export const newContactReducer = createReducer(
  { newName: '', newNumber: '' },
  {
    [addNewContactToState.type]: (_, { payload }) => payload,
    [clearNewContactState.type]: (_, { payload }) => payload,
  },
);

export const entities = createReducer([], {
  [fetchContactsSuccess]: (_, action) => action.payload,
});

export const isLoading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
});

export const error = createReducer(null, {
  [fetchContactsRequest]: () => null,
  [fetchContactsError]: (_, action) => action.payload,
});
