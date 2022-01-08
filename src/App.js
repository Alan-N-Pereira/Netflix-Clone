import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home, Browse, Signin, Signup } from './pages/index';
import * as ROUTES from './constants/routes';
import { IsUserRedirect } from './helpers/routes';

function App() {
	const user = {};
	return (
		<Router>
			<Routes>
				<Route path={ROUTES.HOME} element={<Home />} />
				<Route path={ROUTES.BROWSE} element={<Browse />} />
				<Route path={ROUTES.SIGN_UP} element={<Signup />} />
				<Route
					path={ROUTES.SIGN_IN}
					element={
						<IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
							<Signin />
						</IsUserRedirect>
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
