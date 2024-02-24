import { Button, List, ListItem } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';
import { actions } from '../../redux/contacts/contactsSlice';
import { Notification } from 'components/Notification/Notification';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const filteredContacts = useMemo(() => {
    if (filter === '') return contacts;
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  }, [contacts, filter]);
  return (
    <>
      {filteredContacts.length === 0 ? (
        <Notification message="No contacts have been found" />
      ) : (
        <List>
          {filteredContacts.map(({ name, number, id }) => (
            <ListItem key={id}>
              {name}: {number}
              <Button onClick={e => dispatch(actions.delete(id))}>
                Delete
              </Button>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};
