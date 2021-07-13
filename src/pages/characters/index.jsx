import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getCharacters } from '../../services/characterService';
import SearchPage from '../../components/searchPage/index';
import {
  Character,
  CharacterName,
  CharacterImage,
} from './styles';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(0);

  const searchCharacters = () => {
    getCharacters(page)
      .then(({ data: response }) => {
        setCharacters(response.data.results);
      });
  };

  const handleSearch = (e) => {
    const newQuery = e.target.value;

    const newPage = 0;
    setPage(0);

    getCharacters(newPage, newQuery)
      .then(({ data: response }) => {
        setCharacters(response.data.results);
      });
  };

  return (
    <div>
      <SearchPage
        title="Characters"
        onSearch={handleSearch}
        onLoad={searchCharacters}
      >
        {characters.map((character) => (
          <Link key={character.id} to={`/characters/${character.id}`}>
            <Character>
              <CharacterImage
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={character.name}
              />
              <CharacterName>{character.name}</CharacterName>
            </Character>
          </Link>
        ))}
      </SearchPage>
    </div>
  );
};
Characters.propTypes = {};

export default Characters;
