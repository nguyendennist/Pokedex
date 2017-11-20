import ADD_POKEMON from 'constants/add-pokemon';

const initialState = {
	pokemons: []
};

const addPokemon = (state, action) => ({
	...state,
	pokemons: [
		...state.pokemons,
		action.payload
	]
})

const pokemon = (state = initialState, action) => {
	switch(action.type) {
		case ADD_POKEMON:
			return addPokemon(state, action);
		default:
			return state;
	}
};

export default pokemon;
