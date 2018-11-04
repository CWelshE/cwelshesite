// Wraps the whole application/website.
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import 'typeface-roboto-slab';

// Non-library component imports
import Header from './header';
import Footer from './footer';
import { css } from 'react-emotion';
import text from '../constants/text.js';
import Navigation from './navigation';

// Given to react-helmet
import favicon from '../images/favicon.png';

// Applied to `html`.
const docStyles = css`
  * {
    box-sizing: border-box;
  }
  background: #2f313f;
  margin: 0;
  padding: 0;
`;

// Applied to children of Layout.
const wrapperStyles = css`
  background: rgba(0, 0, 0, 0.2);
  font-family: ${text.default.typeface};
  color: ${text.colors.primary};
  max-width: calc(80vw);
  min-height: 500px;
  margin: 0 auto;
  padding-top: 1.5rem;
  border-radius: 5px;

  > * {
    padding: 0 calc(5vw - 15px);
  }

  @media screen and (max-width: 550px) {
    max-width: 95vw;
    padding: 1em;
  }
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <div className={wrapperStyles}>
          <Helmet>
            <title>{data.site.siteMetadata.title}</title>
            <link rel="icon" type="image/png" href={favicon} />
            <html className={docStyles} lang="en" />
          </Helmet>
          <Header text={data.site.siteMetadata.title} />
          <Navigation />
          <div>{children}</div>
          <Footer />
        </div>
      </React.Fragment>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
