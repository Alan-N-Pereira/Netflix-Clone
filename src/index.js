import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'normalize.css';
import { GlobalStyles } from './globalStyles';
// eslint-disable-next-line
import { firebase } from './lib/firebase.prod';

ReactDOM.render(
	<div>
		<GlobalStyles />
		<App />
	</div>,
	document.getElementById('root')
);
