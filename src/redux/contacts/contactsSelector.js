// import { useSelector } from 'react-redux';
// import { createSelector } from 'reselect';

const getAllContacts = state => {
  return state.phoneBook.contacts;
};

const getFilteredContacts = state => {
  const { filter } = state;
  return getAllContacts(state).filter(contact =>
    contact.name.toUpperCase().includes(filter.toUpperCase()),
  );
};

export const contactsSelectors = {
  getAllContacts,
  getFilteredContacts,
};
