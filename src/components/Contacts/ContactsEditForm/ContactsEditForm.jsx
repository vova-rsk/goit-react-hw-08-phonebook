import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Container,
  StyledTextField,
  StyledButton,
  StyledPaper,
} from './ContactsEditForm.styled';
import * as contactsOperations from '../../../redux/contacts/contacts-operations';
// import { registrationDataCheckingSucces } from '../../utils/utils';

const ContactsEditForm = ({ contact, modalHide }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  const handleSubmit = e => {
    e.preventDefault();

    // if (!registrationDataCheckingSucces({ name, email })) return;

    dispatch(contactsOperations.patch({ id: contact.id, name, number }));
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
            // title="The name can only consist of letters, apostrophes, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <StyledTextField
            required
            label="Phone number"
            variant="standard"
            size="small"
            // title="The mail value should look like this: example@domain.com"
            value={number}
            onChange={e => setNumber(e.target.value)}
          />
          <StyledButton type="submit" variant="contained" size="large">
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
