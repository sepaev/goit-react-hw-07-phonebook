import types from './types';
const localContacts = JSON.parse(window.localStorage.getItem('contacts'));

export const contactsReducer = (state = localContacts ? localContacts : [], { type, payload }) => {
  let newState = [];
  switch (type) {
    case types.ADD:
      newState = [...state, payload];
      window.localStorage.setItem('contacts', JSON.stringify(newState));
      return newState;
    case types.DELETE:
      newState = state.filter(({ id }) => id !== payload);
      window.localStorage.setItem('contacts', JSON.stringify(newState));
      return newState;
    default:
      return state;
  }
};

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
