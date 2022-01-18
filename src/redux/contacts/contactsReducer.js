import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';

const contacts = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [addContact.fulfilled]: (state, action) => [...state, action.payload],
  [deleteContact.fulfilled]: (state, action) =>
    state.filter(contact => contact.id !== action.payload.id),
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,

  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,

  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.pending]: () => null,
  [fetchContacts.fulfilled]: () => null,
  [fetchContacts.rejected]: (_, action) => action.payload,

  [addContact.pending]: () => null,
  [addContact.fulfilled]: () => null,
  [addContact.rejected]: (_, action) => action.payload,

  [deleteContact.pending]: () => null,
  [deleteContact.fulfilled]: () => null,
  [deleteContact.rejected]: (_, action) => action.payload,
});

export const phonebookReducer = combineReducers({
  contacts,
  isLoading,
  error,
});
