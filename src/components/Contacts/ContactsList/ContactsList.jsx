import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as contactsOperations from '../../../redux/contacts/contacts-operations';
import ContactItem from '../ContactsItem';
import { getFilteredContacts } from '../../../redux/contacts/contacts-selectors';
import StyledList from './ContactsList.styled';
import { resetContacts } from '../../../redux/contacts/contacts-slice';

const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetch());
    return () => dispatch(resetContacts());
  }, [dispatch]);

  return (
    <StyledList>
      {filteredContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </StyledList>
  );
};

export default ContactList;
