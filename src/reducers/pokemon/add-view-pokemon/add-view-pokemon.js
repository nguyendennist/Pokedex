const addViewPokemon = (state, action) => ({
  ...state,
  viewPokemons: [
    ...state.viewPokemons,
    action.payload
  ]
});

export default addViewPokemon;
