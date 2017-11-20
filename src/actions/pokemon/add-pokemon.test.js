import addPokemon from './add-pokemon';

describe('unit tests', () => {
	test('should be defined', () => {
		expect(addPokemon).toBeDefined();
	});

	test('should have the same properties and values', () => {
		const result = addPokemon('Charizard');

		expect(result.type).toBe('ADD_POKEMON');
		expect(result.payload).toBe('Charizard');
	});
});
