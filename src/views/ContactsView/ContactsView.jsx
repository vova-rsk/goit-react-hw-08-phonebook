import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import ContactsList from '../../components/Contacts/ContactsList';
import StyledAddButton from './ContactsView.styled';
import ContactsAddForm from '../../components/ContactsAddForm';
import ModalWindow from '../../components/Modal';

const ContactsView = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ContactsList />
      <StyledAddButton variant="contained" onClick={() => setModalOpen(true)}>
        <AddIcon />
      </StyledAddButton>
      <ModalWindow modalShow={modalOpen} modalHide={() => setModalOpen(false)}>
        <ContactsAddForm modalHide={() => setModalOpen(false)} />
      </ModalWindow>
    </>
  );
};

export default ContactsView;
