function doClearName(name) {
  if (!name) return name;
  return name.split(' ').join('').toLowerCase().trim();
}
export default doClearName;
