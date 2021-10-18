import { createReducer } from '@reduxjs/toolkit';
import { makeSearch } from './actions/filter_actions';
import { addNewContactToState, clearNewContact } from './actions/newContacts_actions';
import { getContacts, addContact, removeContact } from './operations/contactsOperations';

export const filterReducer = createReducer('', { [makeSearch.type]: (_, { payload }) => payload });

export const newContactReducer = createReducer(
  { newName: '', newNumber: '' },
  {
    [addNewContactToState]: (_, { payload }) => payload,
    [clearNewContact]: (_, { payload }) => payload,
  },
);

export const entities = createReducer([], {
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [removeContact.fulfilled]: (state, { payload }) => {
    console.log(payload);
    return state.filter(({ id }) => id !== payload.id);
  },
  [getContacts.fulfilled]: (state, { payload }) => {
    if (state.length !== payload.length) {
      return payload;
    }
    return state;
  },
});

export const isLoading = createReducer(false, {
  [getContacts.pending]: () => true,
  [getContacts.fulfilled]: () => false,
  [getContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [removeContact.pending]: () => true,
  [removeContact.fulfilled]: () => false,
  [removeContact.rejected]: () => false,
});

export const error = createReducer(null, {
  [getContacts.rejected]: (_, action) => action.payload,
  [getContacts.pending]: () => null,
  [addContact.rejected]: (_, action) => action.payload,
  [addContact.pending]: () => null,
  [removeContact.rejected]: (_, action) => action.payload,
  [removeContact.pending]: () => null,
});
