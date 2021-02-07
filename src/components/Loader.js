import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  margin-top: 32px;

  font-size: 32px;
`;

const Loader = () => (
  <Container>
    <span role='img' aria-label='Loading'>⏲</span>
  </Container>
);

export default Loader;