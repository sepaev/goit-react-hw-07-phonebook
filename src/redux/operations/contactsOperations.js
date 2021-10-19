import { fetchContacts, postContact, deleteContact } from '../../services/contactsAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getContacts = createAsyncThunk('contacts/fetchContacts', async () => await fetchContacts());
export const addContact = createAsyncThunk('contacts/createContact', async newContact => await postContact(newContact));
export const removeContact = createAsyncThunk(
  'contacts/deleteContact',
  async ({ id, name }) => await deleteContact(id, name),
);
