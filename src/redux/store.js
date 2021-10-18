import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { filterReducer, newContactReducer, isLoading, entities, error } from './reducer';
// import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const middleware = [
  ...getDefaultMiddleware({
    // serializableCheck: {
    //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    // },
  }),
  logger,
];

const rootReducer = combineReducers({
  contacts: combineReducers({ isLoading, entities, error }),
  filter: filterReducer,
  newContact: newContactReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

// export const persistor = persistStore(store);

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter', 'newContact'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);
// reducer: persistedReducer,

// const defaultExportObject = { store, persistor };
// export default defaultExportObject;
