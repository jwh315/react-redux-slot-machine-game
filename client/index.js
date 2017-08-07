import React from 'react';
import { Provider } from 'react-redux';

import ReactDOM from 'react-dom';
import { configureStore } from './redux/game';
import Game from './components/Game';


const store = configureStore();


ReactDOM.render(
	<Provider store={store}>
		<Game />
	</Provider>,
	document.getElementById("root")
);
