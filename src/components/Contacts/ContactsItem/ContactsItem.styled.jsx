import styled from '@emotion/styled';
import ListItem from '@mui/material/ListItem';

const StyledListItem = styled(ListItem)`
  &:nth-of-type(2n + 1) {
    background-color: rgba(241, 241, 241, 0.5);
  }

  &:nth-of-type(2n) {
    background-color: rgba(241, 241, 241, 0.1);
  }
`;
export default StyledListItem;
