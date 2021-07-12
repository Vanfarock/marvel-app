import styled from 'styled-components';

export const ComicsContainer = styled.div`

`;

export const Title = styled.h3`
  font-size: 20px;
`;

export const Results = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;

  margin-top: 15px;

  cursor: pointer;

  & > a {
    color: ${(props) => props.theme.fontColorOnBackground};
  }
`;

export const Comic = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
`;

export const ComicThumbnail = styled.img`
  object-fit: contain;

  max-height: 300px;
  width: 100%;
`;

export const ComicTitle = styled.h4`
  margin-top: 5px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
