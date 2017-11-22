const cachePokemon = (state, action) => ({
	...state,
	pokemons: [
		...state.pokemons,
		action.payload
	]
});

export default cachePokemon;
