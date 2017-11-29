import pokemon from './pokemon';

describe('unit tests', () => {
  test('should be defined', () => {
    expect(pokemon).toBeDefined();
  });

  test('should return state when given an unknown action', () => {
    const action = {
      type: 'REMOVE_POKEMON',
      payload: {
        height: 11,
        id: 12,
        name: 'butterfree',
        sprites: {
          'front_default': 'http://pokeapi.co/media/sprites/pokemon/12.png',
        },
        weight: 320
      }
    };

    const state = {
      pokemons: [
        {
          height: 11,
          id: 12,
          name: 'butterfree',
          sprites: {
            'front_default': 'http://pokeapi.co/media/sprites/pokemon/12.png',
          },
          weight: 320
        }
      ]
    };

    const result = pokemon(state, action);

    expect(result).toEqual({
      pokemons: [
        {
          height: 11,
          id: 12,
          name: 'butterfree',
          sprites: {
            'front_default': 'http://pokeapi.co/media/sprites/pokemon/12.png',
          },
          weight: 320
        }
      ]
    });
  });

  test('should return state with an empty pokemons array when given no state', () => {
    const action = {
      type: 'REMOVE_POKEMON',
      payload: {
        height: 11,
        id: 12,
        name: 'butterfree',
        sprites: {
          'front_default': 'http://pokeapi.co/media/sprites/pokemon/12.png',
        },
        weight: 320
      }
    };

    const state = undefined;

    const result = pokemon(state, action);

    expect(result).toEqual({
      offset: 0,
      pokemons: [],
      viewPokemons: []
    });
  });
});
