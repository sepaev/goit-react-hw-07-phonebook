import types from '../types';

export const makeSearch = e => {
  return {
    type: types.CHANGE_FILTER,
    payload: e.target.value.trim().toLowerCase(),
  };
};
