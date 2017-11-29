import cachePokemon from './cache-pokemon';

describe('unit tests', () => {
  test('should be defined', () => {
    expect(cachePokemon).toBeDefined();
  });

  test('should have the same properties and values', () => {
    const result = cachePokemon('Charizard');

    expect(result).toEqual({
      type: 'CACHE_POKEMON',
      payload: 'Charizard'
    });
  });
});
