import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'react-emotion';

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

const LinksContainer = styled('nav')`
  display: flex;
  justify-content: space-between;
  max-width: 23rem;
  border-top: 5px solid;
  margin-bottom: 2rem;
`;

const MobMenuToggle = styled('button')`
  display: inline-block;
  width: 3.5rem;
  height: 3.5rem;
  background: #fff;

  @media screen and (min-width: 390px) {
    display: none;
  }
`;

class Navigation extends React.Component {
  constructor() {
    super();
    this.state = { collapsed: false };

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
        <MobMenuToggle onClick={this.handleClick} />
        {this.state.collapsed ? null : (
          <LinksContainer>{linksTo}</LinksContainer>
        )}
      </div>
    );
  }
}

export default Navigation;
