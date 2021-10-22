import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import {
  Container,
  StyledTextField,
  StyledButton,
  StyledPaper,
} from './RegisterForm.styled';
import * as authOperations from '../../redux/auth/auth-operations';
import { getLoadingStatus } from '../../redux/auth/auth-selectors';
import { registrationDataValidationSucces } from '../../utils/utils';

const RegisterForm = () => {
  const isLoading = useSelector(getLoadingStatus);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verificationPassword, setVerificationPassword] = useState('');
  const [passwordShow, setPasswordShow] = useState(false);
  const [verificationPasswordShow, setVerificationPasswordShow] =
    useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    if (
      !registrationDataValidationSucces({
        name,
        email,
        password,
        verificationPassword,
      })
    )
      return;

    dispatch(authOperations.signUp({ name, email, password }));
  };

  return (
    <Container>
      <StyledPaper elevation={3} className="paper">
        <h2>Registration form</h2>
        <form onSubmit={e => handleSubmit(e)}>
          <StyledTextField
            required
            label="Name"
            variant="standard"
            size="small"
            title="The name can only consist of letters, apostrophes, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <StyledTextField
            required
            label="Email"
            variant="standard"
            size="small"
            title="The mail value should look like this: example@domain.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <FormControl sx={{ marginTop: '10px' }} variant="standard">
            <InputLabel htmlFor="registration-password">Password</InputLabel>
            <Input
              id="registration-password"
              type={passwordShow ? 'text' : 'password'}
              title="Minimum of 7 characters. Should have at least one special character and one number and one UpperCase Letter."
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
          <FormControl sx={{ marginTop: '10px' }} variant="standard">
            <InputLabel htmlFor="registration-verification-password">
              Password
            </InputLabel>
            <Input
              id="registration-verification-password"
              type={verificationPasswordShow ? 'text' : 'password'}
              value={verificationPassword}
              onChange={e => setVerificationPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() =>
                      setVerificationPasswordShow(!verificationPasswordShow)
                    }
                    onMouseDown={e => {
                      e.preventDefault();
                    }}
                  >
                    {verificationPasswordShow ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <StyledButton
            type="submit"
            loading={isLoading}
            loadingPosition="center"
            startIcon={<HowToRegIcon />}
            variant="contained"
          >
            Register
          </StyledButton>
        </form>
      </StyledPaper>
    </Container>
  );
};

export default RegisterForm;
