import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {
  Container,
  StyledTextField,
  StyledButton,
  StyledPaper,
} from './ContactsAddForm.styled';
import { getLoadingStatus } from '../../redux/contacts/contacts-selectors';
import * as contactsOperations from '../../redux/contacts/contacts-operations';
import {
  contactDataValidationSuccess,
  duplicateChekingSuccess,
} from '../../utils/utils';

const ContactsAddForm = ({ modalHide }) => {
  const isLoading = useSelector(getLoadingStatus);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    const contactToAdd = { name, number };

    if (!contactDataValidationSuccess(contactToAdd)) {
      return;
    }

    if (duplicateChekingSuccess(contactToAdd, { type: 'add' })) {
      return;
    }

    await dispatch(contactsOperations.post(contactToAdd));
    await modalHide();
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
            title="Must be 3-15 digits only"
            value={number}
            onChange={e => setNumber(e.target.value)}
          />
          <StyledButton
            type="submit"
            loading={isLoading}
            loadingPosition="center"
            startIcon={<AddCircleIcon />}
            variant="contained"
          >
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
