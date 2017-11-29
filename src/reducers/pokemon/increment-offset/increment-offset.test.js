import incrementOffset from './increment-offset';

describe('unit tests', () => {
  test('should be defined', () => {
    expect(incrementOffset).toBeDefined();
  });

  test('should increment offset by 20 & retain previous state values', () => {
    const action = {
      type: 'INCREMENT_OFFSET',
      payload: 20
    };

    const state = {
      offset: 0,
      pokemons: []
    };

    const result = incrementOffset(state, action);

    expect(result).toEqual({
      offset: 20,
      pokemons: []
    });
  });
});
