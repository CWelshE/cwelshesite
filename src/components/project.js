import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import text from '../constants/text';

const projectStyles = css`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 3rem;
  font-family: ${text.default.typeface}
  color: ${text.colors.primary};
`;

// Stateless "Project container".
const Project = props => {
  return (
    <div css={projectStyles}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.object.isRequired,
  description: PropTypes.object.isRequired,
};

export default Project;
