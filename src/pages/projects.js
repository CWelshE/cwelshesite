import React from 'react';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import Project from '../components/project';
import mq from '../constants/breakpoints';

import codekiteLogo from '../images/codekite-logo.svg';

const projectsStyles = css`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: ${mq[0]}px) {
    grid-template-columns: 1fr;
  }
`;

const projects = () => {
  return (
    <Layout>
      <h1>Stuff I&apos;ve Made</h1>
      <div css={projectsStyles}>
        <Project
          linkTo={'https://github.com/CWelshE/codekite-js'}
          title={'Codekite JS Starter Kit'}
          projImg={codekiteLogo}
          description={
            'An understandable starting point for those interested in the inner-workings of their JS projects.'
          }
        />
      </div>
    </Layout>
  );
};

export default projects;
