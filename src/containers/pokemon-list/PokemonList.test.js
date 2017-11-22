import React from 'react';
import { Provider } from 'react-redux';
import { create } from 'react-test-renderer';
import store from 'store';
import PokemonList from './PokemonList';

describe('unit tests', () => {
	test('should be defined', () => {
		expect(PokemonList).toBeDefined();
	});
});

describe('ui tests', () => {
	test('should render correctly', () => {
		const tree = create(
			<Provider store={store}>
				<PokemonList />
			</Provider>
		).toJSON();

		expect(tree).toMatchSnapshot();
	});
});
