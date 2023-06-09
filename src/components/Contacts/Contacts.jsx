import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../../store/reducer';

import {
  ContactBox,
  Contact,
  ContactList,
  ContactItem,
  ContactButton,
} from './Contacts.styled';

const Contacts = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(
    contact =>
      contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContact = contactId => {
    dispatch(removeContact({ id: contactId }));
  };

  if (filteredContacts.length > 0) {
    return (
      <ContactBox>
        <Contact>Contacts</Contact>
        <ContactList>
          {filteredContacts.map(({ id, name, phone }) => (
            <ContactItem key={id}>
              <p>
                {name} : {phone}
              </p>
              <ContactButton onClick={() => handleDeleteContact(id)}>
                Delete contact
              </ContactButton>
            </ContactItem>
          ))}
        </ContactList>
      </ContactBox>
    );
  }

  return <p>No contacts found</p>;
};

export default Contacts;
