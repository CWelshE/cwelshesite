import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import text from '../constants/text';
import mq from '../constants/breakpoints.js';
import generateQueries from '../constants/helperfuncs';

const projectStyles = css`
  display:block;
  position: relative;
  transition: all 0.1s;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 1rem;
  margin: 2rem 0;
  font-family: ${text.default.typeface}
  color: ${text.colors.primary};
  ${generateQueries(1, 8, mq[0], mq[1])}

  img {
    width: 100%;
  }

  &:hover {
    box-shadow: 0 0 5px rgba(100, 100, 100, 0.2);
    cursor: pointer;
  }


`;

// Stateless "Project container".
const Project = props => {
  const handleClick = e => {
    e.preventDefault();
    window.location = props.linkTo;
  };

  return (
    <div css={projectStyles} onClick={handleClick}>
      <h3>{props.title}</h3>
      <img src={props.projImg} />
      <p>{props.description}</p>
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  projImg: PropTypes.string.isRequired,
};

export default Project;
