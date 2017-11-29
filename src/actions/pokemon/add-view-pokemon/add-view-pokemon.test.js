import addViewPokemon from './add-view-pokemon';

describe('unit tests', () => {
  test('should be defined', () => {
    expect(addViewPokemon).toBeDefined();
  });

  test('should have the same properties and values', () => {
    const result = addViewPokemon('Charizard');

    expect(result).toEqual({
      type: 'ADD_VIEW_POKEMON',
      payload: 'Charizard'
    });
  });
});
