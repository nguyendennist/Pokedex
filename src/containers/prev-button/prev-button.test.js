import React from 'react';
import { create } from 'react-test-renderer';
import PrevButton from './PrevButton.jsx';

describe('unit tests', () => {
	test('should be defined', () => {
		expect(PrevButton).toBeDefined();
	});
});

describe('ui tests', () => {
	test('should render correctly', () => {
		const tree = create(
			<PrevButton />
		).toJSON();

		expect(tree).toMatchSnapshot();
	});
});
