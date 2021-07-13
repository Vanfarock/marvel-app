import styled from 'styled-components';

export const ComicsContainer = styled.div`

`;

export const Title = styled.h3`
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
