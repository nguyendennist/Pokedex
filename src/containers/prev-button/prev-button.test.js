import React from 'react';
import { Provider } from 'react-redux';
import { create } from 'react-test-renderer';
import store from 'store';
import PrevButton from './PrevButton.jsx';

describe('unit tests', () => {
	test('should be defined', () => {
		expect(PrevButton).toBeDefined();
	});
});

describe('ui tests', () => {
	test('should render correctly', () => {
		const tree = create(
			<Provider store={store}>
				<PrevButton />
			</Provider>
		).toJSON();

		expect(tree).toMatchSnapshot();
	});
});
