import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import SaveIcon from '@mui/icons-material/Save';
import {
  Container,
  StyledTextField,
  StyledButton,
  StyledPaper,
} from './ContactsEditForm.styled';
import { getLoadingStatus } from '../../redux/contacts/contacts-selectors';
import * as contactsOperations from '../../redux/contacts/contacts-operations';
import {
  contactDataValidationSuccess,
  duplicateChekingSuccess,
} from '../../utils/utils';

const ContactsEditForm = ({ contact, modalHide }) => {
  const isLoading = useSelector(getLoadingStatus);
  const dispatch = useDispatch();
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  const handleSubmit = async e => {
    e.preventDefault();

    const contactToUpdate = { id: contact.id, name, number };

    if (!contactDataValidationSuccess(contactToUpdate)) {
      return;
    }

    if (duplicateChekingSuccess(contactToUpdate, { type: 'edit' })) {
      return;
    }

    await dispatch(contactsOperations.patch(contactToUpdate));
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
            startIcon={<SaveIcon />}
            variant="contained"
          >
            Save
          </StyledButton>
        </form>
      </StyledPaper>
    </Container>
  );
};

ContactsEditForm.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  modalHide: PropTypes.func.isRequired,
};

export default ContactsEditForm;
