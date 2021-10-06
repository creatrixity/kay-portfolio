// @flow strict
import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            author {
              name
              resumeUrl
              bio
              photo
              contacts {
                linkedin
                github
                twitter
                email
              }
            }
            menu {
              label
              path
            }
            skills {
              label
              title
              slug
              description
            }
            stints {
              label
              designation
              slug
              epoch
              highlights
            }
            url
            title
            subtitle
            copyright
            disqusShortname
          }
        }
      }
    `
  );

  return site.siteMetadata;
};

export default useSiteMetadata;
