import { createAsyncThunk } from '@reduxjs/toolkit';
import { mockapi } from '../../services/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await mockapi.getContacts();

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
      const response = await mockapi.addContact(contact);

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
      const response = await mockapi.deleteContact(id);

      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  },
);
