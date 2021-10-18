import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LoginIcon from '@mui/icons-material/Login';
import { Container, StyledNavLink } from './NavigationBar.styled';

const NavigationBar = () => {
  return (
    <Container>
      <ul>
        <li>
          <StyledNavLink to="/login" activeClassName="selected">
            <LoginIcon />
            Login
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/register" activeClassName="selected">
            <AppRegistrationIcon />
            Registration
          </StyledNavLink>
        </li>
      </ul>
    </Container>
  );
};

export default NavigationBar;
