import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as contactsOperations from '../../../redux/contacts/contacts-operations';
import ContactItem from '../ContactsItem';
import {
  getFilteredContacts,
  getLoadingStatus,
} from '../../../redux/contacts/contacts-selectors';
import StyledList from './ContactsList.styled';
import { resetContacts } from '../../../redux/contacts/contacts-slice';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const isLoading = useSelector(getLoadingStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetch());
    return () => dispatch(resetContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <StyledList>
          {filteredContacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </StyledList>
      )}
    </>
  );
};

export default ContactList;
