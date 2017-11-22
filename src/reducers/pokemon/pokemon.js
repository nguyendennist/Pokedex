import ADD_VIEW_POKEMON from 'constants/add-view-pokemon';
import addViewPokemon from './add-view-pokemon/add-view-pokemon';
import CACHE_POKEMON from 'constants/cache-pokemon';
import cachePokemon from './cache-pokemon/cache-pokemon';
import DECREMENT_OFFSET from 'constants/decrement-offset';
import decrementOffset from './decrement-offset/decrement-offset';
import INCREMENT_OFFSET from 'constants/increment-offset';
import incrementOffset from './increment-offset/increment-offset';
import SET_VIEW_POKEMONS from 'constants/set-view-pokemons';
import setViewPokemons from './set-view-pokemons/set-view-pokemons';

const initialState = {
	offset: 0,
	pokemons: [],
	viewPokemons: []
};

const pokemon = (state = initialState, action) => {
	switch(action.type) {
	case ADD_VIEW_POKEMON:
		return addViewPokemon(state, action);
	case CACHE_POKEMON:
		return cachePokemon(state, action);
	case DECREMENT_OFFSET:
		return decrementOffset(state, action);
	case INCREMENT_OFFSET:
		return incrementOffset(state, action);
	case SET_VIEW_POKEMONS:
		return setViewPokemons(state, action);
	default:
		return state;
	}
};

export default pokemon;
