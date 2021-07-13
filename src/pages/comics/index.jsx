import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getComics } from '../../services/comicsService';
import SearchPage from '../../components/searchPage/index';
import {
  Comic,
  ComicTitle,
  ComicThumbnail,
} from './styles';

const Comics = () => {
  const [comics, setComics] = useState([]);
  const [page, setPage] = useState(0);

  const searchComics = () => {
    getComics(page)
      .then(({ data: response }) => {
        setComics(response.data.results);
      });
  };

  const handleSearch = (e) => {
    const newQuery = e.target.value;

    const newPage = 0;
    setPage(0);

    getComics(newPage, newQuery)
      .then(({ data: response }) => {
        setComics(response.data.results);
      });
  };

  return (
    <div>
      <SearchPage
        title="Comics"
        onSearch={handleSearch}
        onLoad={searchComics}
      >
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
      </SearchPage>
    </div>
  );
};
Comics.propTypes = {};

export default Comics;
