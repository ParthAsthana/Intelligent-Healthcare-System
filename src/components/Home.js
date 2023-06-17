// Home.js
import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../ThemeContext';

const StyledHome = styled.div`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <StyledHome theme={theme}>
      <h1>Welcome to our Intelligent Healthcare System</h1>
    </StyledHome>
  );
}

export default Home;
