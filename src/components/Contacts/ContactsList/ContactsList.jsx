import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as contactsOperations from '../../../redux/contacts/contacts-operations';
import ContactItem from '../ContactsItem';
import { getFilteredContacts } from '../../../redux/contacts/contacts-selectors';
import StyledList from './ContactsList.styled';

const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetch());
  }, [dispatch]);

  return (
    <StyledList>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </StyledList>
  );
};

export default ContactList;
