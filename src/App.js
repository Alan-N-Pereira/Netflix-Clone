import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import * as ROUTES from './constants/routes';
import { Home, Browse, Signin, Signup } from './pages/index';

function App() {
	return (
		<Router>
			<Routes>
				<Route path={ROUTES.HOME} element={<Home />} />
				<Route path={ROUTES.BROWSE} element={<Browse />} />
				<Route path={ROUTES.SIGN_UP} element={<Signup />} />
				<Route path={ROUTES.SIGN_IN} element={<Signin />} />
			</Routes>
		</Router>
	);
}

export default App;
