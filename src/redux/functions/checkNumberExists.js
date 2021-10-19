import doClearNumber from './doClearNumber';

function checkNumberExists(inputNumber, contacts) {
  const clearNumber = doClearNumber(inputNumber);
  let result = false;
  if (inputNumber === '') result = true;
  contacts.forEach(({ number }) => {
    if (clearNumber === doClearNumber(number)) result = true;
  });
  return result;
}
export default checkNumberExists;
