import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';

import { Notification } from 'components/Notification/Notification';

import {
  deleteContacts,
  selectContacts,
  selectFilter,
} from '../../redux/contacts/contactsSlice';
import { Button, List, ListItem } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = useMemo(() => {
    if (filter === '') return contacts;
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  }, [contacts, filter]);
  return (
    <>
      {filteredContacts?.length === 0 ? (
        <Notification message="No contacts have been found" />
      ) : (
        <List>
          {filteredContacts.map(({ name, number, id }) => (
            <ListItem key={id}>
              {name}: {number}
              <Button onClick={e => dispatch(deleteContacts(id))}>
                Delete
              </Button>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};
