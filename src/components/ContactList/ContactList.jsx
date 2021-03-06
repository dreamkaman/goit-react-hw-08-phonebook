import { useSelector, useDispatch } from 'react-redux';

import Button from '../Button';
import styles from './ContactList.module.css';
import { deleteContact } from '../../redux/contacts/contactsOperations';
import { contactsSelectors } from '../../redux/contacts/contactsSelector';
// import { useEffect } from 'react';

const ContactList = () => {
  const filteredContacts = useSelector(contactsSelectors.getFilteredContacts);
  const dispatch = useDispatch();

  if (!filteredContacts.length) {
    return null;
  }

  const elements = filteredContacts.map(({ name, id, number }) => {
    return (
      <li key={id} className={styles.list}>
        {name}: {number}{' '}
        <Button type="button" text="Delete" onClick={() => dispatch(deleteContact(id))} />
      </li>
    );
  });

  //===============================return=================================
  return <ul>{elements}</ul>;
};

export default ContactList;
