import addViewPokemon from './add-view-pokemon';

describe('unit tests', () => {
  test('should be defined', () => {
    expect(addViewPokemon).toBeDefined();
  });

  test('should add a view pokemon & retain previous state values', () => {
    const action = {
      type: 'ADD_POKEMON',
      payload: {
        height: 7,
        id: 1,
        name: 'bulbasaur',
        sprites: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
        },
        weight: 69
      }
    };

    const state = {
      offset: 0,
      pokemons: [],
      viewPokemons: []
    };

    const result = addViewPokemon(state, action);

    expect(result).toEqual({
      offset: 0,
      pokemons: [],
      viewPokemons: [
        {
          height: 7,
          id: 1,
          name: 'bulbasaur',
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
          },
          weight: 69
        }
      ]
    });
  });
});
