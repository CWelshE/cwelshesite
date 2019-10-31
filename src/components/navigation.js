// Navigation displayed below primary site header
import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import mq from '../constants/breakpoints.js';
import generateQueries from '../constants/helperfuncs';

import homeIcon from '../images/icon_home.svg';
import blogIcon from '../images/icon_blog.svg';
import projectIcon from '../images/icon_project.svg';
import contactIcon from '../images/icon_contact.svg';

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
  ${generateQueries(1, 8, mq[0], mq[1])};
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

  @media screen and (max-width: ${mq[0]}px) {
    margin: 0.5em 0;
  }
`;

const linksTo = Object.keys(links).map((attrs, idx) => {
  return (
    <div css={linkContainer} key={idx}>
      <img src={links[attrs][1]} />
      <StyledLink to={links[attrs][0]} key={idx}>
        {attrs}
      </StyledLink>
    </div>
  );
});

const LinksContainer = styled('nav')`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  @media screen and (max-width: ${mq[0]}px) {
    display: none;
  }
`;

const MobileLinksContainer = styled('nav')`
  background: rgb(30, 30, 30);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: fixed;
  top: 20px;
  right: calc(13vw - 27px);
  width: 180px;
  height: 200px;
  border-radius: 5px;

  @media screen and (min-width: ${mq[0]}px) {
    display: none;
  }
`;

const MobMenuToggle = styled('button')`
  display: block;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  z-index: 99;
  position: fixed;
  top: 20px;
  right: calc(13vw - 27px);
  border: 0;
  background: rgba(0, 0, 0, 0.3);

  @media screen and (min-width: ${mq[0]}px) {
    display: none;
  }
`;

class Navigation extends React.Component {
  constructor() {
    super();
    this.state = { collapsed: true };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      collapsed: !state.collapsed,
    }));
  }

  render() {
    return (
      <div>
        <MobMenuToggle onClick={this.handleClick}>=</MobMenuToggle>
        <LinksContainer>{linksTo}</LinksContainer>
        {this.state.collapsed ? null : (
          <MobileLinksContainer>{linksTo}</MobileLinksContainer>
        )}
      </div>
    );
  }
}

export default Navigation;
