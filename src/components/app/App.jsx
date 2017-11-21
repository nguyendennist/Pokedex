import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import NextButton from 'containers/next-button/NextButton.jsx';
import PrevButton from 'containers/prev-button/PrevButton.jsx';

const App = () => (
	<Provider store={store}>
		<div>
			<h1>hi!</h1>
			<PrevButton />
			<NextButton />
		</div>
	</Provider>
);

export default App;
