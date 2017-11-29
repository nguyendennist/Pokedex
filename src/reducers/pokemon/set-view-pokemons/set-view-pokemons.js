const setViewPokemons = (state, action) => ({
  ...state,
  viewPokemons: action.payload
});

export default setViewPokemons;
