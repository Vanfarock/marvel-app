import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getComics } from '../../services/comicsService';
import {
  ComicsContainer,
  Title,
  Results,
  Comic,
  ComicTitle,
  ComicThumbnail,
} from './styles';

const Comics = () => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    getComics()
      .then(({ data: response }) => {
        setComics(response.data.results);
      });
  }, []);

  return (
    <ComicsContainer>
      <Title>Comics</Title>
      <Results>
        {comics.map((comic) => (
          <Link key={comic.id} to={`/comics/${comic.id}`}>
            <Comic>
              <ComicThumbnail
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt={comic.title}
              />
              <ComicTitle>{comic.title}</ComicTitle>
            </Comic>
          </Link>
        ))}
      </Results>
    </ComicsContainer>
  );
};
Comics.propTypes = {};

export default Comics;
