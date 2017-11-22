import SET_POKEMONS from 'constants/set-pokemons';
import template from 'actions/template/template';

const setPokemons = pokemon => template(SET_POKEMONS, pokemon);

export default setPokemons;
