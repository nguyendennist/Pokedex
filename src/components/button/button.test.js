import React from 'react';
import { create } from 'react-test-renderer';
import Button from './Button.jsx';

describe('unit tests', () => {
	test('should be defined', () => {
		expect(Button).toBeDefined();
	});
});

describe('ui tests', () => {
	test('should render correctly', () => {
		const tree = create(
			<Button name='test' onClick={() => {}}/>
		).toJSON();

		expect(tree).toMatchSnapshot();
	});
});
