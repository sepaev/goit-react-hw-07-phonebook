import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Section from './components/Section';
import { Notify } from 'notiflix';
import { addContact } from './redux/actions/contacts_actions.js';
import { clearNewContactState } from './redux/actions/newContacts_actions';
import checkNewContactInState from './redux/functions/checkNewContactInState';
import { useEffect } from 'react';
import { getContactsFromServer } from './redux/operations/contactsOperations';

Notify.init({ position: 'center-top' });

function App({ contacts, newContact, clearNewContact, addContact }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsFromServer());
  }, []);
  useEffect(() => {
    if (newContact.name !== '' && checkNewContactInState(newContact, contacts)) {
      addContact(newContact);
      clearNewContact();
    }
  }, [addContact, clearNewContact, contacts, newContact]);

  return (
    <>
      <Section title='Phonebook' component='Form' />
      <hr />
      <Section title='Contacts' component='Contacts' />
    </>
  );
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts,
    newContact: state.newContact,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addContact: newContact => dispatch(addContact(newContact)),
    clearNewContact: () => dispatch(clearNewContactState()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  newContact: PropTypes.exact({
    newName: PropTypes.string.isRequired,
    newNumber: PropTypes.string.isRequired,
  }).isRequired,
  clearNewContact: PropTypes.func.isRequired,
  addContact: PropTypes.func.isRequired,
};
