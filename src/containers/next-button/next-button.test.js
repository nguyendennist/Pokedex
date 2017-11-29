import React from 'react';
import { Provider } from 'react-redux';
import { create } from 'react-test-renderer';
import store from 'store';
import NextButton from './NextButton.jsx';

describe('unit tests', () => {
  test('should be defined', () => {
    expect(NextButton).toBeDefined();
  });
});

describe('ui tests', () => {
  test('should render correctly', () => {
    const tree = create(
      <Provider store={store}>
        <NextButton getPokemons={() => {}} />
      </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
