// Toggler.js
import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size:0.8rem;
  padding: 0.6rem;
`;

const Toggler = ({theme, toggleTheme }) => {
  return (
    <Button onClick={toggleTheme} >
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </Button>
  );
};

Toggler.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggler;
