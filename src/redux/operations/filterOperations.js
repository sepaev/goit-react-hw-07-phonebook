import { createSelector } from '@reduxjs/toolkit';
import { getEntitiesSelector, getFilterSelector } from '../selectors';
import { doClearNumber, parseFilterQuery } from '../functions';

const doFiltration = state => {
  const contacts = getEntitiesSelector(state);
  const filter = getFilterSelector(state);

  const makeFiltration = createSelector(
    [() => getEntitiesSelector(state), () => getFilterSelector(state)],
    (contacts, filter) => {
      console.log(contacts);
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
    },
  );
  return makeFiltration(contacts, filter);
};
export default doFiltration;
