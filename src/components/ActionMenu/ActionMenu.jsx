import { useState } from 'react';
import { useDispatch } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Container from './ActionMenu.styled';
import * as contactsOperation from '../../redux/contacts/contacts-operations';
import ModalWindow from '../Modal';
import ContactsEditForm from '../Contacts/ContactsEditForm';

function ActionMenu({ id, name, number }) {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Container>
      <ul>
        <li>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => setModalOpen(true)}
          >
            <EditIcon />
          </IconButton>
        </li>
        <li>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => dispatch(contactsOperation.remove(id))}
          >
            <DeleteIcon />
          </IconButton>
        </li>
      </ul>
      <ModalWindow modalShow={modalOpen} modalHide={() => setModalOpen(false)}>
        <ContactsEditForm
          id={id}
          name={name}
          number={number}
          modalHide={() => setModalOpen(false)}
        />
      </ModalWindow>
    </Container>
  );
}

export default ActionMenu;
