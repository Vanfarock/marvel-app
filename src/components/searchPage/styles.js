import styled from 'styled-components';

export const SearchContainer = styled.div`

`;

export const PageTitle = styled.h3`
  font-size: 20px;
`;

export const SearchInput = styled.input`
  margin-top: 30px;

  font-size: 14px;
  width: 100%;

  padding: 10px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 2px;

  color: ${(props) => props.theme.fontColorOnBackground};
  outline: none;
  
  &::placeholder {
    color: ${(props) => props.theme.fadedFontColor};
  }

  &:focus {
    border-color: ${(props) => props.theme.fontColorOnBackground}
  }
`;
