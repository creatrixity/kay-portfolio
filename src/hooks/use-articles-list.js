// @flow strict
import { useStaticQuery, graphql } from 'gatsby';

const useArticlesList = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query ArticlesListQuery {
        allMarkdownRemark(
          filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
          sort: { order: DESC, fields: [frontmatter___date] }
        ) {
          edges {
            node {
              fields {
                slug
                categorySlug
              }
              frontmatter {
                title
                date
                category
                description
              }
            }
          }
        }
      }
    `
  );

  return allMarkdownRemark;
};

export default useArticlesList;
