import setPokemons from './set-pokemons';

describe('unit tests', () => {
	test('should be defined', () => {
		expect(setPokemons).toBeDefined();
	});

	test('should set pokemons & retain previous state values', () => {
		const action = {
			type: 'SET_POKEMONS',
			payload: []
		};

		const state = {
			offset: 0,
			pokemons: [{
				height: 7,
				id: 1,
				name: 'bulbasaur',
				sprites: {
					front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
				},
				weight: 69
			}]
		};

		const result = setPokemons(state, action);

		expect(result).toEqual({
			offset: 0,
			pokemons: []
		});
	});
});
