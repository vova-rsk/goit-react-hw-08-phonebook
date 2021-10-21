import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Container from './ActionMenu.styled';
import * as contactsOperation from '../../redux/contacts/contacts-operations';
import ModalWindow from '../Modal';
import ContactsEditForm from '../ContactsEditForm';

const ActionMenu = ({ contact }) => {
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
            onClick={() => dispatch(contactsOperation.remove(contact.id))}
          >
            <DeleteIcon />
          </IconButton>
        </li>
      </ul>
      <ModalWindow modalShow={modalOpen} modalHide={() => setModalOpen(false)}>
        <ContactsEditForm
          contact={contact}
          modalHide={() => setModalOpen(false)}
        />
      </ModalWindow>
    </Container>
  );
};

ActionMenu.propTypes = {
  contact: PropTypes.object,
};

export default ActionMenu;
