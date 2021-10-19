import { createAction } from '@reduxjs/toolkit';

export const makeSearch = createAction('filter/changeFilter', value => ({ payload: value.trim().toLowerCase() }));
