import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Container,
  StyledTextField,
  StyledButton,
  StyledPaper,
} from './LoginForm.styled';
import * as authOperations from '../../redux/auth/auth-operations';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.logIn({ email, password }));

    setEmail('');
    setPassword('');
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
          <StyledTextField
            required
            label="Password"
            type="password"
            autoComplete="current-password"
            size="small"
            variant="standard"
            // pattern="^(?=.*?[az])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{7,}$"
            // title="Minimum of 7 characters. Should have at least one special character and one number and one UpperCase Letter."
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <StyledButton type="submit" variant="contained" size="large">
            Login
          </StyledButton>
        </form>
      </StyledPaper>
    </Container>
  );
};

export default LoginForm;
