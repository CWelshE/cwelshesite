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

// Applied to `html`.
const docStyles = css`
  background-color: #24242d;
  margin: 0 90px;
`;

// Applied to children of Layout.
const wrapperStyles = css`
  font-family: ${text.default.typeface};
  color: ${text.colors.primary};
  max-width: 600px;
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
      <div className={wrapperStyles}>
        <Helmet title={data.site.siteMetadata.title} meta={[]}>
          <html className={docStyles} lang="en" />
        </Helmet>
        <Header text={data.site.siteMetadata.title} />
        <div>{children}</div>
        <Footer />
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
