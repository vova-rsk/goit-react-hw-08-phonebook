import styled from '@emotion/styled';
import CardContent from '@mui/material/CardContent';

export const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageThumb = styled.div`
  margin: 10px auto;
  width: 120px;
  height: 120px;

  img {
    display: block;
    height: 100%;
  }
`;
