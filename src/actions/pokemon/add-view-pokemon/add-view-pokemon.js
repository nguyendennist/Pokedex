import ADD_VIEW_POKEMON from 'constants/add-view-pokemon';
import template from 'actions/template/template';

const addViewPokemon = pokemon => template(ADD_VIEW_POKEMON, pokemon);

export default addViewPokemon;
