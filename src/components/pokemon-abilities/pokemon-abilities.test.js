import React from 'react';
import { create } from 'react-test-renderer';
import PokemonAbilities from './PokemonAbilities.jsx';

describe('unit tests', () => {
  test('should be defined', () => {
    expect(PokemonAbilities).toBeDefined();
  });
});

describe('ui tests', () => {
  test('should render correctly', () => {
    const tree = create(
      <PokemonAbilities style={{}} abilities={[]} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
