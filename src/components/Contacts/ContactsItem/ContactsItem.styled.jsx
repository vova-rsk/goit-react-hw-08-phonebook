import styled from '@emotion/styled';
import ListItem from '@mui/material/ListItem';

export const StyledListItem = styled(ListItem)`
  &:nth-of-type(2n + 1) {
    background-color: rgba(241, 241, 241, 0.5);
  }

  &:nth-of-type(2n) {
    background-color: rgba(241, 241, 241, 0.1);
  }

  .name {
    width: 43%;
    flex-grow: 0;
  }

  .number {
    flex-grow: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;

  &:nth-of-type(1) {
    justify-self: start;
  }

  &:nth-of-type(2) {
    justify-self: center;
  }
`;

// export const NumberContainer = styled.div`
//   align-items:center;
// `
