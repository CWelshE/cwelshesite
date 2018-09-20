// The Header component is wrapped by `layout.js`.
import React from 'react';
import PropTypes from 'prop-types';

import text from '../constants/text';

const StyledHeader = text.header;

const Header = props => {
  return <StyledHeader>{props.text}</StyledHeader>;
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
