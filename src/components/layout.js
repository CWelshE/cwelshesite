// Wraps the whole application/website.
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

// Non-library component imports
import Header from './header';
import Footer from './footer';
import { css } from 'react-emotion';
import './layout.css';
import text from '../constants/text.js';
import Navigation from './navigation';

// Given to react-helmet
import favicon from '../../public/favicon.png';

// Applied to `html`.
const docStyles = css`
  background-color: #24242d;
  margin: 0;
  padding: 0;
`;

// Applied to children of Layout.
const wrapperStyles = css`
  font-family: ${text.default.typeface};
  color: ${text.colors.primary};
  max-width: 600px;
  min-height: 100vh;
  margin: 0 calc(13vw - 35px);
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
        </div>
        <Footer />
      </React.Fragment>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
