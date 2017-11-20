import ADD_POKEMON from 'constants/add-pokemon';

const addPokemon = pokemon => ({
	type: ADD_POKEMON,
	payload: pokemon
});

export default addPokemon;
