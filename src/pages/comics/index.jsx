import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getComics } from '../../services/comicsService';
import Grid from '../../components/grid';
import {
  ComicsContainer,
  Title,
  SearchInput,
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

  const handleSearch = (query) => {
    getComics(query)
      .then(({ data: response }) => {
        setComics(response.data.results);
      });
  };

  return (
    <ComicsContainer>
      <Title>Comics</Title>
      <SearchInput
        id="comicSearch"
        type="search"
        name="comicName"
        placeholder="Search for a comic"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <Grid title="Comics">
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
      </Grid>
    </ComicsContainer>
  );
};
Comics.propTypes = {};

export default Comics;
