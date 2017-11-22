const setPokemons = (state, action) => ({
	...state,
	pokemons: action.payload
});

export default setPokemons;
