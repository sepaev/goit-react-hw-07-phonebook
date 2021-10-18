import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import Section from './components/Section';
import { Notify } from 'notiflix';
// import { addContact } from './redux/actions/contacts_actions.js';
import { clearNewContact } from './redux/actions/newContacts_actions';
import checkNewContactInState from './redux/operations/checkNewContactInState';
import { useEffect } from 'react';
import { getContacts, addContact } from './redux/operations/contactsOperations';
import { getContactsSelector, getNewContactSelector } from './redux/selectors';

Notify.init({ position: 'center-top' });

function App() {
  const newContact = useSelector(getNewContactSelector);
  const contacts = useSelector(getContactsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    const createContact = newContact => dispatch(addContact(newContact));
    const clear = () => dispatch(clearNewContact());
    dispatch(getContacts());
    if (newContact.name !== '' && checkNewContactInState(newContact, contacts)) {
      createContact(newContact);
      clear();
    }
  }, [contacts, dispatch, newContact]);

  return (
    <>
      <Section title='Phonebook' component='Form' />
      <hr />
      <Section title='Contacts' component='Contacts' />
    </>
  );
}

export default App;
