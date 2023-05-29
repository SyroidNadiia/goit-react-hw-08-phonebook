import React from 'react';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts/selectors';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { Text } from './ContactList.styles';

export const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <>
      <ul>
        {filteredContacts.length > 0 && <Text variant="h4">Contacts</Text>}
        {filteredContacts.map(contact => (
          <ContactListItem key={contact.id} contact={contact}></ContactListItem>
        ))}
      </ul>
    </>
  );
};
