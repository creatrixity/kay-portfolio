// @flow strict
import React from 'react';
import renderer from 'react-test-renderer';
import { StaticQuery, useStaticQuery } from 'gatsby';
import siteMetadata from '../../../jest/__fixtures__/site-metadata';
import allMarkdownRemark from '../../../jest/__fixtures__/all-markdown-remark';
import pageContext from '../../../jest/__fixtures__/page-context';
import { LandingProvider } from '../../hooks/useLanding';
import Landing from './Landing';

describe('Landing', () => {
  const props = {
    data: {
      ...allMarkdownRemark,
    },
    ...pageContext,
  };

  beforeEach(() => {
    StaticQuery.mockImplementationOnce(
      ({ render }: RenderCallback) => render(siteMetadata),
      useStaticQuery.mockReturnValue(siteMetadata)
    );
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(
        <LandingProvider>
          <Landing {...props} />
        </LandingProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
