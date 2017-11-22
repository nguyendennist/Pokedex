import setViewPokemons from './set-view-pokemons';

describe('unit tests', () => {
	test('should be defined', () => {
		expect(setViewPokemons).toBeDefined();
	});

	test('should set view pokemons & retain previous state values', () => {
		const action = {
			type: 'SET_POKEMONS',
			payload: [{
				height: 7,
				id: 1,
				name: 'bulbasaur',
				sprites: {
					front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
				},
				weight: 69
			}]
		};

		const state = {
			offset: 0,
			pokemons: [],
			viewPokemons: []
		};

		const result = setViewPokemons(state, action);

		expect(result).toEqual({
			offset: 0,
			pokemons: [],
			viewPokemons: [{
				height: 7,
				id: 1,
				name: 'bulbasaur',
				sprites: {
					front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
				},
				weight: 69
			}]
		});
	});
});
