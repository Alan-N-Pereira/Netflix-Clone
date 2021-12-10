import React from 'react';
import { FaqsContainer } from './containers/faq';
import { FooterContainer } from './containers/footer';
import { JumbotronContainer } from './containers/jumbotron';

function App() {
	return (
		<div>
			<JumbotronContainer />
			<FaqsContainer />
			<FooterContainer />
		</div>
	);
}

export default App;
