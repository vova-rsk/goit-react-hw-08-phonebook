import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Container,
  StyledTextField,
  StyledButton,
  StyledPaper,
} from './ContactsEditForm.styled';
import * as contactsOperations from '../../../redux/contacts/contacts-operations';
// import { registrationDataCheckingSucces } from '../../utils/utils';

const ContactsEditForm = ({
  id,
  name: editingName,
  number: editingNumber,
  modalHide,
}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(editingName);
  const [number, setNumber] = useState(editingNumber);

  const handleSubmit = e => {
    e.preventDefault();

    // if (!registrationDataCheckingSucces({ name, email })) return;

    dispatch(contactsOperations.patch({ id, name, number }));
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

export default ContactsEditForm;
