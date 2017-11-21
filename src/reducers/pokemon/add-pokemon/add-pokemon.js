const addPokemon = (state, action) => ({
	...state,
	pokemons: [
		...state.pokemons,
		action.payload
	]
});

export default addPokemon;
