// Navbar.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeContext } from '../ThemeContext';
import Toggler from './Toggler';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const StyledLink = styled(Link)`
  margin: 0 1em;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
`;
const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <StyledNav theme={theme}>
      <div>
        <StyledLink to="/" theme={theme}>Home</StyledLink>
        <StyledLink to="/login" theme={theme}>Login</StyledLink>
        <StyledLink to="/register" theme={theme}>Register</StyledLink>
        <StyledLink to="/dashboard" theme={theme}>Dashboard</StyledLink>
      </div>
      <Toggler theme={theme} toggleTheme={toggleTheme} />
    </StyledNav>
  );
}

export default Navbar;

