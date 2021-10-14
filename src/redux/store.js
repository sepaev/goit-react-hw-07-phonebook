import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { filterReducer, contactsReducer, newContactReducer } from './reducer';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    newContact: newContactReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
