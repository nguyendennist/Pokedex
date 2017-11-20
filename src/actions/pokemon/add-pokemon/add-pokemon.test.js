import addPokemon from './add-pokemon';

describe('unit tests', () => {
	test('should be defined', () => {
		expect(addPokemon).toBeDefined();
	});

	test('should have the same properties and values', () => {
		const result = addPokemon('Charizard');

		expect(result).toEqual({
			type: 'ADD_POKEMON',
			payload: 'Charizard'
		});
	});
});
