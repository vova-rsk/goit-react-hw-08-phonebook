import styled from '@emotion/styled';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import { Paper } from '@mui/material';

export const Container = styled.div`
  box-sizing: border-box;
  margin: 60px auto;
  width: 340px;
`;

export const StyledPaper = styled(Paper)`
  padding: 10px;
  border-radius: 20px;

  h2 {
    margin: 20px 0 0;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;

    padding: 30px;
  }
`;

export const StyledTextField = styled(TextField)`
  width: 100%;

  &:not(:first-of-type) {
    margin-top: 12px;
  }
`;

export const StyledButton = styled(LoadingButton)`
  margin: 20px auto 0;
  width: 140px;
`;
