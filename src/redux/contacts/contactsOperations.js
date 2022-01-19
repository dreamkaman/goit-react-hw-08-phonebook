import { createAsyncThunk } from '@reduxjs/toolkit';
import { phonebookAPI } from '../../services/api/phonebookAPI';
// import { mockapi } from '../../services/api/mockapi';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await phonebookAPI.getContacts();
      console.log('response', response);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const response = await phonebookAPI.addContact(contact);

      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const response = await phonebookAPI.deleteContact(id);

      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  },
);
