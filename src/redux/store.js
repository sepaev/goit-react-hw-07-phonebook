import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { filterReducer, contactsReducer, newContactReducer } from './reducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  newContact: newContactReducer,
});
const store = createStore(rootReducer, composeWithDevTools());

export default store;
