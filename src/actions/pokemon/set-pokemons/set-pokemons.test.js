import setPokemons from './set-pokemons';

describe('unit tests', () => {
	test('should be defined', () => {
		expect(setPokemons).toBeDefined();
	});

	test('should have the same properties and values', () => {
		const result = setPokemons([]);

		expect(result).toEqual({
			type: 'SET_POKEMONS',
			payload: []
		});
	});
});
