import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Container,
  StyledTextField,
  StyledButton,
  StyledPaper,
} from './LoginForm.styled';
import * as authOperations from '../../redux/auth/auth-operations';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordShow, setPasswordShow] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
  };

  return (
    <Container>
      <StyledPaper elevation={3} className="paper">
        <h2>Login form</h2>
        <form onSubmit={e => handleSubmit(e)}>
          <StyledTextField
            required
            label="Email"
            variant="standard"
            size="small"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            // title="Название почты должно иметь такой вид: example@domain.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <FormControl sx={{ marginTop: '6px' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={passwordShow ? 'text' : 'password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setPasswordShow(!passwordShow)}
                    onMouseDown={e => {
                      e.preventDefault();
                    }}
                  >
                    {passwordShow ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <StyledButton type="submit" variant="contained" size="large">
            Login
          </StyledButton>
        </form>
      </StyledPaper>
    </Container>
  );
};

export default LoginForm;
