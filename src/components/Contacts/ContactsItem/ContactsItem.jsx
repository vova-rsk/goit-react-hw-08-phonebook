import PropTypes from 'prop-types';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import ActionMenu from '../../ActionMenu';
import StyledListItem from './ContactsItem.styled';

const ContactItem = ({ contact }) => {
  return (
    <StyledListItem secondaryAction={<ActionMenu contact={contact} />}>
      <ListItemAvatar>
        <Avatar>
          <PersonIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={contact.name} />
      <ListItemText primary={contact.number} />
    </StyledListItem>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default ContactItem;
