import decrementOffset from './decrement-offset';

describe('unit tests', () => {
	test('should be defined', () => {
		expect(decrementOffset).toBeDefined();
	});

	test('should have the same properties and values', () => {
		const result = decrementOffset(20);

		expect(result).toEqual({
			type: 'DECREMENT_OFFSET',
			payload: 20
		});
	});
});
