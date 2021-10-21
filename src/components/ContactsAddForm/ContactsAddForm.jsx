import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Container,
  StyledTextField,
  StyledButton,
  StyledPaper,
} from './ContactsAddForm.styled';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import * as contactsOperations from '../../redux/contacts/contacts-operations';
import { duplicateChekingSuccess } from '../../utils/utils';
import notification from '../../utils/notification';

const ContactsAddForm = ({ modalHide }) => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const contactToAdd = { name, number };

    if (duplicateChekingSuccess(contacts, contactToAdd)) {
      notification.duplicationSuccess();
      return;
    }

    dispatch(contactsOperations.post(contactToAdd));
    modalHide();
  };

  return (
    <Container>
      <StyledPaper elevation={3} className="paper">
        <h2>Contact information</h2>
        <form onSubmit={e => handleSubmit(e)}>
          <StyledTextField
            required
            label="Name"
            variant="standard"
            size="small"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <StyledTextField
            required
            label="Phone number"
            variant="standard"
            size="small"
            value={number}
            onChange={e => setNumber(e.target.value)}
          />
          <StyledButton type="submit" variant="contained" size="large">
            Add
          </StyledButton>
        </form>
      </StyledPaper>
    </Container>
  );
};

ContactsAddForm.propTypes = {
  modalHide: PropTypes.func.isRequired,
};

export default ContactsAddForm;
