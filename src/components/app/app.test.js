import React from 'react';
import { create } from 'react-test-renderer';
import App from './App.jsx';

describe('unit tests', () => {
	test('should be defined', () => {
		expect(App).toBeDefined();
	});
})

describe('ui tests', () => {
	test('should render correctly', () => {
		const tree = create(
			<App />
		).toJSON();

		expect(tree).toMatchSnapshot();
	});
});
