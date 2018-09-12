import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const StyledHeader = styled('div')`
  display: flex;
  background: red;
`;

const Header = props => {
  return <StyledHeader>{props.text}</StyledHeader>;
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
