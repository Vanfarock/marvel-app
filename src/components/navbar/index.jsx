import React from 'react';
import {
  NavbarContainer, NavbarContent, MenuItem,
} from './styles';
import Logo from '../../common/logo';
import Row from '../../common/row';

const Navbar = () => (
  <NavbarContainer>
    <NavbarContent>
      <Row>
        <Logo />
      </Row>
      <Row>
        <MenuItem to="/comics">Comics</MenuItem>
        <MenuItem to="/characters">Characters</MenuItem>
      </Row>
    </NavbarContent>
  </NavbarContainer>
);

Navbar.propTypes = {};

export default Navbar;
