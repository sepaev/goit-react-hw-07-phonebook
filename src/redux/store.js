import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { filterReducer, contactsReducer, newContactReducer, isLoading, entities, error } from './reducer';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter', 'newContact'],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  newContact: newContactReducer,
  api: combineReducers({ isLoading, entities, error }),
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
export const persistor = persistStore(store);

// const defaultExportObject = { store, persistor };
// export default defaultExportObject;
