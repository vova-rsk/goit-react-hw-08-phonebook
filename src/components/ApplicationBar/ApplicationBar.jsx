import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import NavigationBar from '../NavigationBar';
import { Container } from './ApplicationBar.styled';
import FilterBar from '../FilterBar';
import Logo from '../Logo/Logo';
import UserMenu from '../UserMenu';
import { getAuthStatus } from '../../redux/auth/auth-selectors';
import * as authOperations from '../../redux/auth/auth-operations';

const ApplicationBar = () => {
  const history = useHistory();
  const auth = useSelector(getAuthStatus);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleLogOut = async () => {
    dispatch(authOperations.logOut());
    setAnchorEl(null);
    history.push({ pathname: '/login' });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Container>
            <Logo />
            {auth && <FilterBar />}
            {!auth && <NavigationBar />}
            {auth && (
              <UserMenu
                handleMenu={e => {
                  setAnchorEl(e.currentTarget);
                }}
                anchorEl={anchorEl}
                handleClose={() => {
                  setAnchorEl(null);
                }}
                handleLogout={handleLogOut}
              />
            )}
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ApplicationBar;
