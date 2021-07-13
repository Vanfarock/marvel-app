import React from 'react';
import PropTypes from 'prop-types';
import {
  GridContainer,
  Results,
} from './styles';

const Grid = ({ children }) => (
  <GridContainer>
    <Results>
      {children}
    </Results>
  </GridContainer>

);

Grid.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Grid;
