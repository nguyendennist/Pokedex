import React from 'react';
import { create } from 'react-test-renderer';
import NextButton from './NextButton.jsx';

describe('unit tests', () => {
	test('should be defined', () => {
		expect(NextButton).toBeDefined();
	});
});

describe('ui tests', () => {
	test('should render correctly', () => {
		const tree = create(
			<NextButton />
		).toJSON();

		expect(tree).toMatchSnapshot();
	});
});
