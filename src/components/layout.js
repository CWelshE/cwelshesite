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
  margin: 0;
  padding: 0;
`;

// Applied to children of Layout.
const wrapperStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: ${text.default.typeface};
  color: ${text.colors.primary};
  max-width: 600px;
  min-height: 100vh;
  margin: 0 0 0 calc(13vw - 35px);
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
          <Helmet title={data.site.siteMetadata.title} meta={[]}>
            <html className={docStyles} lang="en" />
          </Helmet>
          <Header text={data.site.siteMetadata.title} />
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
