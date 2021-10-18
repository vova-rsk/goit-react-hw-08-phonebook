import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import styled from '@emotion/styled';

export const StyledLink = styled(Link)`
  display: flex;
  color: #fff;
  text-decoration: none;
`;

export const StyledTypography = styled(Typography)`
  display: flex;
  flex-grow: 0;
  align-self: center;
  font-size: 30px;
`;

export const StyledIcon = styled(ContactPhoneIcon)`
  display: block;
  align-self: center;
  margin-right: 8px;
`;
