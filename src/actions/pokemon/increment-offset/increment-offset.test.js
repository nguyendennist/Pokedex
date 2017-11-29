import incrementOffset from './increment-offset';

describe('unit tests', () => {
  test('should be defined', () => {
    expect(incrementOffset).toBeDefined();
  });

  test('should have the same properties and values', () => {
    const result = incrementOffset(20);

    expect(result).toEqual({
      type: 'INCREMENT_OFFSET',
      payload: 20
    });
  });
});
