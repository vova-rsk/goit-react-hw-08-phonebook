import PropTypes from 'prop-types';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import BasicCard from '../UserCard';
import { StyledMenuItem } from './UserMenu.styled';

const UserMenu = ({ handleMenu, anchorEl, handleClose, handleLogout }) => {
  return (
    <>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <BasicCard />
        <StyledMenuItem onClick={handleLogout}>
          <ExitToAppIcon />
          Logout
        </StyledMenuItem>
      </Menu>
    </>
  );
};

UserMenu.propTypes = {
  handleMenu: PropTypes.func.isRequired,
  anchorEl: PropTypes.any,
  handleClose: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default UserMenu;
