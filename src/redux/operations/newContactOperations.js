import { Notify } from 'notiflix';
import { checkNumberExists, checkNameExists } from '../functions';
///////////////////////
const checkNewContactInState = (newContact, contacts) => {
  const check = checkNewContact(newContact, contacts);
  if (!check.result) {
    if (check.message) Notify.failure(check.message);
    return false;
  }
  return true;
};
////////////////////////
function checkNewContact({ newName, newNumber }, contacts) {
  let message = '';
  if (!newName || !newNumber || !contacts) return { result: false, message };
  if (checkNumberExists(newNumber, contacts)) {
    message = `Can't do this operation. Number ${newNumber} already exists.`;
    return { result: false, message };
  }
  if (checkNameExists(newName, contacts)) {
    message = `Can't do this operation. Name ${newName} already exists.`;
    return { result: false, message };
  }
  message = 'Well Done! Added ' + newName;
  return { result: true, message };
}

export default checkNewContactInState;
