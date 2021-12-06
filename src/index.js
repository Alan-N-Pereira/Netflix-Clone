import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'normalize.css';
import { GlobalStyles } from './globalStyles';

ReactDOM.render(
	<div>
		<GlobalStyles />
		<App />
	</div>,
	document.getElementById('root')
);
