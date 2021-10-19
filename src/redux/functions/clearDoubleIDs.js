function clearDoubleIDs(contacts) {
  const idList = [];
  const filtredList = [];
  contacts.forEach(contact => {
    if (idList.indexOf(contact.id) < 0) {
      idList.push(contact.id);
      filtredList.push(contact);
    }
  });
  return filtredList;
}
export default clearDoubleIDs;
