import { useSelector, useDispatch } from 'react-redux';

import Button from '../Button';
import styles from './ContactList.module.css';
import { deleteContact } from '../../redux/contacts/contactsOperations';
import { contactsSelectors } from '../../redux/contacts/contactsSelector';

// function getFilteredContacts(state) {
//   const {
//     phoneBook: { contacts },
//     filter,
//   } = state;
//   return contacts.filter(contact => contact.name.toUpperCase().includes(filter.toUpperCase()));
// }

const ContactList = () => {
  const filteredContacts = useSelector(contactsSelectors.getFilteredContacts);

  const dispatch = useDispatch();

  if (!filteredContacts.length) {
    return null;
  }

  const elements = filteredContacts.map(({ name, id, phone }) => {
    return (
      <li key={id} className={styles.list}>
        {name}: {phone}{' '}
        <Button type="button" text="Delete" onClick={() => dispatch(deleteContact(id))} />
      </li>
    );
  });

  //===============================return=================================
  return <ul>{elements}</ul>;
};

export default ContactList;
