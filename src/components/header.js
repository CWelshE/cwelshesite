// The Header component is wrapped by `layout.js`.
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import text from '../constants/text';

const StyledHeader = styled('div')`
  display: flex;
  color: ${text.colors.primary};
  font-size: ${text.header.size};
  margin: ${text.header.margins};
  border-bottom: 3px solid;
  line-height: 80px;
  max-width: 550px;
`;

const Header = props => {
  return <StyledHeader>{props.text}</StyledHeader>;
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
