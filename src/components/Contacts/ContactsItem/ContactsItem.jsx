import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import ActionMenu from '../../ActionMenu';
import StyledListItem from './ContactsItem.styled';

const ContactItem = ({ id, name, number }) => {
  return (
    <StyledListItem
      secondaryAction={<ActionMenu id={id} name={name} number={number} />}
    >
      <ListItemAvatar>
        <Avatar>
          <PersonIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={name}
        // secondary={number}
      />
      <ListItemText
        primary={number}
        // secondary={number}
      />
    </StyledListItem>
  );
};

export default ContactItem;

// ContactItem.propTypes = {
//   id: PropTypes.number,
//   name: PropTypes.string,
//   number: PropTypes.string,
// };
