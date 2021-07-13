import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Grid from '../grid';
import {
  SearchContainer,
  PageTitle,
  SearchInput,
} from './styles';

const SearchPage = ({
  title, children, onSearch, onLoad,
}) => {
  useEffect(() => {
    onLoad();
  }, []);

  return (
    <SearchContainer>
      <PageTitle>{title}</PageTitle>
      <SearchInput onChange={onSearch} />
      <Grid>
        {children}
      </Grid>
    </SearchContainer>
  );
};
SearchPage.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  onSearch: PropTypes.func.isRequired,
  onLoad: PropTypes.func.isRequired,
};

export default SearchPage;
