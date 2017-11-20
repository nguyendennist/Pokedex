import decrementOffset from './decrement-offset';

describe('unit tests', () => {
	test('should be defined', () => {
		expect(decrementOffset).toBeDefined();
	});

	test('should decrement offset by 20 & retain previous state values', () => {
		const action = {
			type: 'DECREMENT_OFFSET',
			payload: 20
		}

		const state = {
			offset: 20,
			pokemons: []
		};

		const result = decrementOffset(state, action);

		expect(result).toEqual({
			offset: 0,
			pokemons: []
		});
	});
});
