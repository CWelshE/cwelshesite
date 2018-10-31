import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const page = ({ data }) => {
  console.log('data:', data);
  return (
    <Layout>
      <div>Hello</div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`;

export default page;
