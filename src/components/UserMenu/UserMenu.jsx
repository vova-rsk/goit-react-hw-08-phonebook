import { useDispatch } from 'react-redux';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import BasicCard from '../UserCard';
import { StyledMenuItem } from './UserMenu.styled';
import * as authOperations from '../../redux/auth/auth-operations';

const UserMenu = ({ handleMenu, anchorEl, handleClose }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authOperations.logOut());
    handleClose();
  };

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

export default UserMenu;
