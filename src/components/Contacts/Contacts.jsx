import { Fragment } from 'react';
import Notification from '../Notification';
import { useSelector, useDispatch } from 'react-redux';
import { makeSearch } from '../../redux/actions/filter_actions';
import { removeContact } from '../../redux/operations/contactsOperations';
import { ContactsItem, ContactsList, DeleteButton, NumberSpan, SearchInput } from './Contacts.styled';
import { getFiltredContactsSelector, getContactsSelector } from '../../redux/selectors';

function Contacts() {
  const { entities } = useSelector(getContactsSelector);
  const filterdContacts = useSelector(getFiltredContactsSelector);

  const message = entities.length ? 'No contacts found.' : 'You have no contacts yet.';
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
