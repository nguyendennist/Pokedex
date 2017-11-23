import React from 'react';
import { create } from 'react-test-renderer';
import Pokemon from './Pokemon.jsx';

describe('unit tests', () => {
	test('should be defined', () => {
		expect(Pokemon).toBeDefined();
	});
});

describe('ui tests', () => {
	test('should render correctly', () => {
		const tree = create(
			<Pokemon key={'1'} pokemonData={{
				abilities: [
					{
						ability: {
							name: 'chlorophyll',
							url: 'https://www.pokeapi.co/api/v2/ability/34/'
						},
						is_hidden: true,
						slot: 3
					},
					{
						ability: {
							name: 'overgrow',
							url: 'https://www.pokeapi.co/api/v2/ability/65/'
						},
						is_hidden: false,
						slot: 1
					}
				],
				height: 7,
				id: 1,
				name: 'bulbasaur',
				sprites: {
					front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
				},
				weight: 69,
			}} />
		).toJSON();

		expect(tree).toMatchSnapshot();
	});
});
