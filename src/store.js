import { createStore } from 'redux';
import pokemon from 'reducers/pokemon/pokemon';

const store = createStore(pokemon);

export default store;
