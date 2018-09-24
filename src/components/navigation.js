import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'react-emotion';

import generateQueries from '../constants/helperfuncs';

import homeIcon from '../../public/images/icon_home.svg';
import blogIcon from '../../public/images/icon_blog.svg';
import projectIcon from '../../public/images/icon_project.svg';
import contactIcon from '../../public/images/icon_contact.svg';

// Name to display: ['actuallink', [SVG icon]]
const links = {
  Home: ['/', homeIcon],
  Blog: ['/blog', blogIcon],
  Projects: ['/projects', projectIcon],
  Contact: ['/contact', contactIcon],
};

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  margin-right: 1em;
`;

const linkContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1rem;
  margin-top: 1em;

  > img {
    height: 100%;
    margin-right: 0.5rem;
  }
`;

const linksTo = Object.keys(links).map((attrs, idx) => {
  return (
    <div className={linkContainer} key={idx}>
      <img src={links[attrs][1]} />
      <StyledLink to={links[attrs][0]} key={idx}>
        {attrs}
      </StyledLink>
    </div>
  );
});

const LinksContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  max-width: 23rem;
  border-top: 5px solid;
  margin-bottom: 2rem;
`;

const Navigation = () => <LinksContainer>{linksTo}</LinksContainer>;

export default Navigation;
