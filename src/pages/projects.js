import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PropTypes from 'prop-types';
import Project from '../components/project';

// TODO: Make `Project` component
// TODO: Figure out how to retrieve a list of projects
// TODO: Iterate on `Project` component list to form page
const projects = () => {
  return (
    <Layout>
      <div>
        <h1>Stuff I&apos;ve Made</h1>
        <Project title={'Test title'} description={'Test description'} />
      </div>
    </Layout>
  );
};

projects.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default projects;
