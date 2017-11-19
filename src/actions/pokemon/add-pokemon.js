import ADD_POKEMON from 'constants';

const addPokemon = pokemon => ({
	type: ADD_POKEMON,
	payload: pokemon
});

export default addPokemon;
