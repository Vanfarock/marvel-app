import styled from 'styled-components';

export const Comic = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
`;

export const ComicThumbnail = styled.img`
  object-fit: contain;

  width: 100%;
`;

export const ComicTitle = styled.h4`
  margin-top: 5px;
  font-size: 16px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
