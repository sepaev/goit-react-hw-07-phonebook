import { useDispatch, useSelector } from 'react-redux';
import Section from './components/Section';
import { Notify } from 'notiflix';
import { clearNewContact } from './redux/actions/newContacts_actions';
import checkNewContactInState from './redux/operations/newContactOperations';
import { useEffect } from 'react';
import { getContacts, addContact } from './redux/operations/contactsOperations';
import { getNewContactSelector, getAllStateSelector } from './redux/selectors';

Notify.init({ position: 'center-top' });

function App() {
  const newContact = useSelector(getNewContactSelector);
  const state = useSelector(getAllStateSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  useEffect(() => {
    const createContact = newContact => dispatch(addContact(newContact));
    const clear = () => dispatch(clearNewContact());
    if (newContact.name !== '' && checkNewContactInState(state)) {
      createContact(newContact);
      clear();
    }
  }, [state, dispatch, newContact]);

  return (
    <>
      <Section title='Phonebook' component='Form' />
      <hr />
      <Section title='Contacts' component='Contacts' />
    </>
  );
}

export default App;
