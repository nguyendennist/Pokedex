import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import Pokedex from 'containers/pokedex/Pokedex.jsx';

const App = () => (
  <Provider store={store}>
    <div>
      <Pokedex />
    </div>
  </Provider>
);

export default App;
