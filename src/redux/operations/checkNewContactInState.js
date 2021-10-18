import { Notify } from 'notiflix';
import doClearNumber from '../operations/doClearNumber';
///////////////////////
const checkNewContactInState = (newContact, contacts) => {
  const check = checkNewContact(newContact, contacts);
  if (check.result) {
    Notify.success(check.message);
    return true;
  } else {
    if (check.message) Notify.failure(check.message);
    return false;
  }
};
////////////////////////
function checkNewContact({ newName, newNumber }, contacts) {
  if (!newName || !newNumber || !contacts) return { result: false, message: '' };
  if (checkNumberExists(newNumber, contacts))
    return { result: false, message: `Can't do this operation. Number ${newNumber} already exists.` };
  if (checkNameExists(newName, contacts))
    return { result: false, message: `Can't do this operation. Name ${newName} already exists.` };
  return { result: true, message: 'Well Done! Added ' + newName };
}

function checkNameExists(inputName, contacts) {
  let result = false;
  const clearName = doClearName(inputName);
  if (clearName === '') result = true;
  contacts.forEach(({ name }) => {
    if (clearName === doClearName(name)) result = true;
  });
  return result;
}

function checkNumberExists(inputNumber, contacts) {
  const clearNumber = doClearNumber(inputNumber);
  let result = false;
  if (inputNumber === '') result = true;
  contacts.forEach(({ number }) => {
    if (clearNumber === doClearNumber(number)) result = true;
  });
  return result;
}

function doClearName(name) {
  if (!name) return name;
  return name.split(' ').join('').toLowerCase().trim();
}

export default checkNewContactInState;
