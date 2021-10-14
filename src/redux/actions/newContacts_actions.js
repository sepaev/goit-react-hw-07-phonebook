import types from '../types';
let nameRef;
let numberRef;

export const addNewContactToState = e => {
  e.preventDefault();
  nameRef = e.target.children[0].children[1];
  numberRef = e.target.children[1].children[1];
  const inputName = nameRef.value.trim();
  const inputNumber = numberRef.value;

  return {
    type: types.ADD_NEW_CONTACT,
    payload: { newName: inputName, newNumber: inputNumber },
  };
};

export const clearNewContactState = () => {
  if (nameRef) nameRef.value = '';
  if (numberRef) numberRef.value = '';
  return {
    type: types.REMOVE_NEW_CONTACT,
    payload: { newName: '', newNumber: '' },
  };
};
