import React from 'react';
import { create } from 'react-test-renderer';
import PrevButton from './PrevButton.jsx';

it('renders correctly', () => {
  const tree = create(
    <PrevButton />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
