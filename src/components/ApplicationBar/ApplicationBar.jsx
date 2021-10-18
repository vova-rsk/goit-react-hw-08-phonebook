import { useState } from 'react';
import { useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import NavigationBar from '../NavigationBar';
import { Container } from './ApplicationBar.styled';
import FilterBar from '../FilterBar';
import Logo from '../Logo/Logo';
import UserMenu from '../UserMenu';
import { getAuthStatus } from '../../redux/auth/auth-selectors';

const ApplicationBar = () => {
  const auth = useSelector(getAuthStatus);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
                handleMenu={handleMenu}
                anchorEl={anchorEl}
                handleClose={handleClose}
              />
            )}
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ApplicationBar;
