import React from 'react';
import { create } from 'react-test-renderer';
import App from './App.jsx';

it('renders correctly', () => {
  const tree = create(
    <App></App>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
