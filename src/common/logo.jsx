import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MarvelLogo from '../assets/images/marvel-logo.svg';

const StyledLogo = styled.img`
  width: inherit;
`;

const Logo = () => (
  <Link to="/">
    <StyledLogo src={MarvelLogo} alt="Marve logo" />
  </Link>
);

export default Logo;
