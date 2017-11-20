import ADD_POKEMON from 'constants/add-pokemon';
import addPokemon from './add-pokemon/add-pokemon';

const initialState = {
	pokemons: []
};

const pokemon = (state = initialState, action) => {
	switch(action.type) {
		case ADD_POKEMON:
			return addPokemon(state, action);
		default:
			return state;
	}
};

export default pokemon;
