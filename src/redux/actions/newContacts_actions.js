import { createAction } from '@reduxjs/toolkit';
let nameRef;
let numberRef;

export const addNewContactToState = createAction('newContact/create', e => {
  e.preventDefault();
  nameRef = e.target.children[0].children[1];
  numberRef = e.target.children[1].children[1];

  return {
    payload: { newName: nameRef.value.trim(), newNumber: numberRef.value },
  };
});

export const clearNewContactState = createAction('newContact/clear', () => {
  if (nameRef) nameRef.value = '';
  if (numberRef) numberRef.value = '';
  return {
    payload: { newName: '', newNumber: '' },
  };
});
