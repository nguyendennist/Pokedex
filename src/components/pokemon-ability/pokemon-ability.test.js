import React from 'react';
import { create } from 'react-test-renderer';
import PokemonAbility from './PokemonAbility.jsx';

describe('unit tests', () => {
  test('should be defined', () => {
    expect(PokemonAbility).toBeDefined();
  });
});

describe('ui tests', () => {
  test('should render correctly', () => {
    const tree = create(
      <PokemonAbility ability={{}} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
