import ADD_POKEMON from 'constants/add-pokemon';
import addPokemon from './add-pokemon/add-pokemon';
import DECREMENT_OFFSET from 'constants/decrement-offset';
import decrementOffset from './decrement-offset/decrement-offset';
import INCREMENT_OFFSET from 'constants/increment-offset';
import incrementOffset from './increment-offset/increment-offset';
import SET_POKEMONS from 'constants/set-pokemons';
import setPokemons from './set-pokemons/set-pokemons';

const initialState = {
	offset: 0,
	pokemons: []
};

const pokemon = (state = initialState, action) => {
	switch(action.type) {
	case ADD_POKEMON:
		return addPokemon(state, action);
	case DECREMENT_OFFSET:
		return decrementOffset(state, action);
	case INCREMENT_OFFSET:
		return incrementOffset(state, action);
	case SET_POKEMONS:
		return setPokemons(state, action);
	default:
		return state;
	}
};

export default pokemon;