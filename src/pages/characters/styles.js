import styled from 'styled-components';

export const Character = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
`;

export const CharacterImage = styled.img`
  object-fit: contain;

  width: 100%;
`;

export const CharacterName = styled.h4`
  margin-top: 5px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
