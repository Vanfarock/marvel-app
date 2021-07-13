import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacter } from '../../services/characterService';
// import PropTypes from 'prop-types';
import {
  DetailsContainer, Image, Name, AppearedOnContainer, AppearedOn,
} from './styles';

const CharacterDetails = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getCharacter(id)
      .then(({ data: response }) => {
        console.log(response.data.results[0]);
        setCharacter(response.data.results[0]);
      });
  });

  if (character !== {}) {
    return (
      <h3>This character does not exist!</h3>
    );
  }

  return (
    <DetailsContainer>
      <Image
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
      />
      <Name>{character.name}</Name>
      <AppearedOnContainer>
        <AppearedOn />
      </AppearedOnContainer>
    </DetailsContainer>
  );
};

CharacterDetails.propTypes = {};

export default CharacterDetails;
