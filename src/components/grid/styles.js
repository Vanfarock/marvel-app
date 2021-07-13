import styled from 'styled-components';

export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Results = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;

  margin-top: 15px;

  cursor: pointer;

  & > a {
    color: ${(props) => props.theme.fontColorOnBackground};
  }
  
  @media only screen and (min-width: 520px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media only screen and (min-width: 620px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 740px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (min-width: 860px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
  
  @media only screen and (min-width: 1360px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;
