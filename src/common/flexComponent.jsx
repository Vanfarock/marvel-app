/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';

const Flex = styled.div`
  flex: 1;

  margin-inline: var(--horizontal-distance);
  width: var(--page-width);
  max-width: var(--page-max-width);
`;

const flexComponent = (Component) => (
  (props) => (
    <Flex>
      <Component {...props} />
    </Flex>
  )
);

export default flexComponent;
