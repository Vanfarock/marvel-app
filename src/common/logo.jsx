import React from 'react';
import styled from 'styled-components';
import MarvelLogo from '../assets/images/marvel-logo.svg';

const StyledLogo = styled.img`
  width: inherit;
`;

const Logo = () => (
  <StyledLogo src={MarvelLogo} alt="Marve logo" />
);

export default Logo;
