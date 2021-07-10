import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  background: ${(props) => props.theme.foregroundColor};

  & * {
    color: ${(props) => props.theme.fontColorOnForeground};
  }
`;

export const NavbarContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-inline: var(--horizontal-distance);
  width: var(--page-width);
  max-width: var(--page-max-width);
`;

export const MenuItem = styled(NavLink)`
  padding: 20px;

  font-weight: bold;
`;

export const Logo = styled.h1`

`;
