import ADD_POKEMON from 'constants/add-pokemon';
import template from 'actions/template/template';

const addPokemon = pokemon => template(ADD_POKEMON, pokemon);

export default addPokemon;
