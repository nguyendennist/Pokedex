import addPokemon from './add-pokemon';

describe('unit tests', () => {
	test('should be defined', () => {
		expect(addPokemon).toBeDefined();
	});

	test('should add a pokemon & retain previous state values', () => {
		const action ={
			type: 'ADD_POKEMON',
			payload: {
				height: 7,
				id: 1,
				name: 'bulbasaur',
				sprites: {
					front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
				},
				weight: 69
			}
		};

		const state = {
			offset: 0,
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

		const result = addPokemon(state, action);

		expect(result).toEqual({
			offset: 0,
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
