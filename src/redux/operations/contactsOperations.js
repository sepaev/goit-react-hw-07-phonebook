import { fetchContacts, postContact, deleteContact } from '../../services/contactsAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  const contacts = await fetchContacts();
  return contacts;
});

export const addContact = createAsyncThunk('contacts/createContact', async newContact => {
  const created = await postContact(newContact);
  return created;
});

export const removeContact = createAsyncThunk('contacts/deleteContact', async ({ id, name }) => {
  const isDeletable = await deleteContact(id, name);
  if (isDeletable) return { id, name };
  return { id: null, name: null };
});
