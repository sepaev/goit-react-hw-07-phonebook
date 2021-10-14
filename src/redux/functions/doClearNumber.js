function doClearNumber(number) {
  if (!number) return number;
  const noSpace = number.split(' ').join('');
  const noBracket = noSpace.split('(').join('').split(')').join('');
  const noSign = noBracket.split('-').join('').split('+').join('');
  return noSign;
}
export default doClearNumber;
