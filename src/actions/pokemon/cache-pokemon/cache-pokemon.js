import CACHE_POKEMON from 'constants/cache-pokemon';
import template from 'actions/template/template';

const cachePokemon = pokemon => template(CACHE_POKEMON, pokemon);

export default cachePokemon;
