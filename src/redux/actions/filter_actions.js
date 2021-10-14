import { createAction } from '@reduxjs/toolkit';

export const makeSearch = createAction('filter/changeFilter', e => e.target.value.trim().toLowerCase());
