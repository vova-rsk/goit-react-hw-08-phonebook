import styled from '@emotion/styled';

const Container = styled.div`
  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li:not(:last-of-type) {
    margin-right: 15px;
  }
`;

export default Container;
