import { Fragment } from 'react';
import Notification from '../Notification';
import { useSelector, useDispatch } from 'react-redux';
import { makeSearch } from '../../redux/actions/filter_actions';
import { removeContact } from '../../redux/operations/contactsOperations';
import useFilter from '../../redux/operations/useFilter';
import { ContactsItem, ContactsList, DeleteButton, NumberSpan, SearchInput } from './Contacts.styled';
import { getContactsSelector, getFilterSelector } from '../../redux/selectors';

function Contacts() {
  const contacts = useSelector(getContactsSelector);
  const filter = useSelector(getFilterSelector);
  const filterdContacts = useFilter(contacts, filter);
  const message = contacts.length ? 'No contacts found.' : 'You have no contacts yet.';
  const dispatch = useDispatch();

  return (
    <Fragment>
      <ContactsList>
        <SearchInput
          type='text'
          name='search'
          title='Введите имя или телефон'
          placeholder='Search contact'
          onInput={e => dispatch(makeSearch(e.target.value))}
        />
        {filterdContacts.length > 0 &&
          filterdContacts.map(({ id, name, number }) => (
            <ContactsItem key={id}>
              {'☎ ' + name + ': '}
              <NumberSpan>
                {number}
                <DeleteButton id={id} onClick={() => dispatch(removeContact({ id, name }))}>
                  X
                </DeleteButton>
              </NumberSpan>
            </ContactsItem>
          ))}
      </ContactsList>
      {!filterdContacts.length && <Notification message={message} />}
    </Fragment>
  );
}

export default Contacts;
