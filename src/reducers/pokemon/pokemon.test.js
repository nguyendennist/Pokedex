import addPokemon from 'actions/pokemon/add-pokemon';
import pokemon from './pokemon';

describe('unit tests', () => {
	test('should be defined', () => {
		expect(pokemon).toBeDefined();
	});

	test('should add a pokemon', () => {
		const action = addPokemon({
			height: 7,
			id: 1,
			name: 'bulbasaur',
			sprites: {
				front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
			},
			weight: 69
		});

		const state = {
			pokemons: [
				{
					height: 11,
					id: 12,
					name: 'butterfree',
					sprites: {
						'front_default': 'http://pokeapi.co/media/sprites/pokemon/12.png',
			    },
					weight: 320
				}
			]
		};

		const result = pokemon(state, action);

		expect(result).toEqual({
			pokemons: [
				{
					height: 11,
					id: 12,
					name: 'butterfree',
					sprites: {
						'front_default': 'http://pokeapi.co/media/sprites/pokemon/12.png',
			    },
					weight: 320
				},
				{
					height: 7,
					id: 1,
					name: 'bulbasaur',
					sprites: {
						front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
					},
					weight: 69
				}
			]
		});
	});
});
