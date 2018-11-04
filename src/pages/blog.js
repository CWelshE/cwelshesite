import React from 'react';
import { Link, graphql } from 'gatsby';
import styled, { css } from 'react-emotion';
import Layout from '../components/layout';
import PropTypes from 'prop-types';

const StyledLink = styled(Link)`
  color: #fff;
  &:visited {
    color: #fff;
  }
`;

const blog = ({ data }) => {
  return (
    <Layout>
      <div>
        <h1>Stuff I&apos;ve written</h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <StyledLink to={node.fields.slug}>
              <h3>
                {node.frontmatter.title}{' '}
                <span> — {node.frontmatter.date} </span>
              </h3>
            </StyledLink>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

blog.propTypes = {
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

export default blog;
