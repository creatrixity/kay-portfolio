// @flow strict
import React from 'react';
import renderer from 'react-test-renderer';
import Landing from './Landing';

describe('Landing', () => {
  const props = {};

  it('renders correctly', () => {
    const tree = renderer.create(<Landing {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
