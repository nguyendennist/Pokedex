import SET_VIEW_POKEMONS from 'constants/set-view-pokemons';
import template from 'actions/template/template';

const setViewPokemons = pokemon => template(SET_VIEW_POKEMONS, pokemon);

export default setViewPokemons;
