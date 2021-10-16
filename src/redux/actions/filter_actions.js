import { createAction } from '@reduxjs/toolkit';

export const makeSearch = createAction('filter/changeFilter', value => {
  console.log(value.trim().toLowerCase());
  return { payload: value.trim().toLowerCase() };
});
