import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Container,
  StyledTextField,
  StyledButton,
  StyledPaper,
} from './RegisterForm.styled';
import * as authOperations from '../../redux/auth/auth-operations';
import { registrationDataCheckingSucces } from '../../utils/utils';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verificationPassword, setVerificationPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (
      !registrationDataCheckingSucces({
        name,
        email,
        password,
        verificationPassword,
      })
    )
      return;

    dispatch(authOperations.signUp({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
    setVerificationPassword('');
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
          <StyledTextField
            required
            label="Password"
            type="password"
            autoComplete="current-password"
            size="small"
            variant="standard"
            title="Minimum of 7 characters. Should have at least one special character and one number and one UpperCase Letter."
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <StyledTextField
            required
            label="Password verification "
            type="password"
            autoComplete="current-password"
            variant="standard"
            size="small"
            value={verificationPassword}
            onChange={e => setVerificationPassword(e.target.value)}
          />
          <StyledButton type="submit" variant="contained" size="large">
            Register
          </StyledButton>
        </form>
      </StyledPaper>
    </Container>
  );
};

export default RegisterForm;
