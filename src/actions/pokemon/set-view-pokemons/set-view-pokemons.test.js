import setViewPokemons from './set-view-pokemons';

describe('unit tests', () => {
	test('should be defined', () => {
		expect(setViewPokemons).toBeDefined();
	});

	test('should have the same properties and values', () => {
		const result = setViewPokemons([]);

		expect(result).toEqual({
			type: 'SET_VIEW_POKEMONS',
			payload: []
		});
	});
});
