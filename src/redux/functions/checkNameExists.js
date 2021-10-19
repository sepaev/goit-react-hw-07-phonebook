import doClearName from './doClearName';

function checkNameExists(inputName, contacts) {
  let result = false;
  const clearName = doClearName(inputName);
  if (clearName === '') result = true;
  contacts.forEach(({ name }) => {
    if (clearName === doClearName(name)) result = true;
  });
  return result;
}
export default checkNameExists;
