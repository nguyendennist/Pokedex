import React from 'react';
import { Provider } from 'react-redux';
import { create } from 'react-test-renderer';
import store from 'store';
import Pokedex from './Pokedex.jsx';
import 'isomorphic-fetch';

describe('unit tests', () => {
  test('should be defined', () => {
    expect(Pokedex).toBeDefined();
  });
});

describe('ui tests', () => {
  test('should render correctly', () => {
    const tree = create(
      <Provider store={store}>
        <Pokedex />
      </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
