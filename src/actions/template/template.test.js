import template from './template';

describe('unit tests', () => {
  test('should be defined', () => {
    expect(template).toBeDefined();
  });

  test('should have the same properties and values', () => {
    const result = template('INCREMENT_OFFSET', 20);

    expect(result).toEqual({
      type: 'INCREMENT_OFFSET',
      payload: 20
    });
  });
});
