import doClearNumber from './doClearNumber';

function useFilter(contacts, filter) {
  if (!contacts || !contacts.length) return [];
  if (!filter) return contacts;
  const filtredArray = doFiltration(contacts, filter);
  const clearArray = clearDoubleIDs(filtredArray);
  return clearArray;
}

function doFiltration(contacts, filter) {
  const { filterQueryText, filterQueryNumber } = parseFilterQuery(filter.toString());
  if (filterQueryText.length > 0 || filterQueryNumber.length > 0) {
    let filtredArray = [];
    //поиск по номеру
    if (filterQueryNumber.length > 0) {
      filtredArray = contacts.filter(({ number }) => {
        const clearNumberText = doClearNumber(number);
        return clearNumberText.includes(filterQueryNumber);
      });
      //комбинированый поиск
      if (filterQueryText.length > 0) {
        const namesArray = contacts.filter(({ name }) => name.toLowerCase().includes(filterQueryText));
        return filtredArray.length > 0 ? filtredArray.concat(namesArray) : namesArray;
      }
      return filtredArray;
    } else {
      //Поиск по имени
      filtredArray = contacts.filter(({ name }) => name.toLowerCase().includes(filterQueryText));
      return filtredArray;
    }
  }
  return contacts;
}

function parseFilterQuery(filterQuery) {
  let filterQueryText = '';
  let filterQueryNumber = '';
  if (filterQuery) {
    if (filterQuery.match(/\d+/)) {
      filterQueryNumber = filterQuery.match(/\d+/).toString();
      const queries = filterQuery.split(filterQueryNumber);
      const query = queries[0] || queries[1];
      filterQueryText = query ? query : '';
    } else {
      filterQueryText = filterQuery;
    }
  }
  return { filterQueryText, filterQueryNumber };
}

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

export default useFilter;
